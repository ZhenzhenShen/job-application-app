import { computed, ref, watch } from 'vue'
import {
  isApplication,
  sampleApplications,
  storageKey,
  statuses,
} from '../data/trackerApplications'

export function useApplications() {
  const storageWarning = ref('')
  function load() {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw === null) return structuredClone(sampleApplications)
      const parsed = JSON.parse(raw)
      if (
        !Array.isArray(parsed) ||
        !parsed.every(isApplication) ||
        new Set(parsed.map((item) => item.id)).size !== parsed.length
      )
        throw new Error('Invalid data')
      return parsed
    } catch {
      storageWarning.value =
        'We could not read your saved applications. Example data is shown; saving changes will replace the stored records.'
      return structuredClone(sampleApplications)
    }
  }
  const applications = ref(load())
  const search = ref('')
  const statusFilter = ref('All')
  const dateOrder = ref('newest')
  const filteredApplications = computed(() => {
    const query = search.value.trim().toLowerCase()
    return applications.value
      .filter(
        (item) =>
          (statusFilter.value === 'All' ||
            item.status === statusFilter.value) &&
          `${item.company} ${item.role}`.toLowerCase().includes(query),
      )
      .sort((a, b) =>
        dateOrder.value === 'newest'
          ? b.date.localeCompare(a.date)
          : a.date.localeCompare(b.date),
      )
  })
  // Totals describe all applications, independently of table filters.
  const stats = computed(() => ({
    total: applications.value.length,
    ...Object.fromEntries(
      statuses.map((status) => [
        status,
        applications.value.filter((item) => item.status === status).length,
      ]),
    ),
  }))
  watch(
    applications,
    (value) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(value))
        storageWarning.value = ''
      } catch {
        storageWarning.value =
          'Your browser could not save these changes. They will be lost when you leave this page.'
      }
    },
    { deep: true, flush: 'sync' },
  )
  function saveApplication(values, id) {
    const record = {
      ...values,
      company: values.company.trim(),
      role: values.role.trim(),
      notes: values.notes.trim(),
      id: id ?? crypto.randomUUID(),
    }
    if (!isApplication(record)) return false
    if (id) {
      const index = applications.value.findIndex((item) => item.id === id)
      if (index < 0) return false
      applications.value[index] = record
    } else applications.value.push(record)
    return true
  }
  function updateStatus(id, status) {
    const record = applications.value.find((item) => item.id === id)
    if (record && statuses.includes(status)) record.status = status
  }
  return {
    applications,
    search,
    statusFilter,
    dateOrder,
    filteredApplications,
    stats,
    storageWarning,
    saveApplication,
    updateStatus,
  }
}
