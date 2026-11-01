<script setup>
import { reactive, ref } from 'vue'
import { X } from 'lucide-vue-next'
import { statuses } from '../../../data/trackerApplications'

const props = defineProps({ application: { type: Object, default: null } })
const emit = defineEmits(['save'])
const dialog = ref(null)
const error = ref('')
const now = new Date()
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
const form = reactive({
  ...(props.application ?? {
    company: '',
    role: '',
    date: today,
    status: 'Applied',
    notes: '',
  }),
})
function open() {
  dialog.value.showModal()
}
function close() {
  dialog.value.close()
}
function submit() {
  if (!form.company.trim() || !form.role.trim()) {
    error.value = 'Company and role cannot be blank.'
    return
  }
  emit('save', {
    company: form.company,
    role: form.role,
    date: form.date,
    status: form.status,
    notes: form.notes,
  })
}
defineExpose({ open, close })
</script>

<template>
  <dialog
    ref="dialog"
    aria-labelledby="form-title"
    class="m-auto max-h-[90dvh] w-[min(520px,92vw)] overflow-auto rounded-2xl bg-white p-7 shadow-xl backdrop:bg-slate-900/45 backdrop:backdrop-blur-sm"
  >
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="mb-2 text-[10px] font-bold tracking-[.18em] text-indigo-500">
          YOUR NEXT CHAPTER
        </p>
        <h2
          id="form-title"
          class="text-2xl font-bold"
        >
          {{ application ? 'Edit application' : 'Add application' }}
        </h2>
      </div>
      <button
        type="button"
        @click="close"
        aria-label="Close form"
        class="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
      >
        <X :size="20" />
      </button>
    </div>
    <form
      @submit.prevent="submit"
      class="mt-6 space-y-4"
    >
      <label class="block text-sm font-medium text-slate-600"
        >Company <span class="text-rose-600">*</span
        ><input
          v-model="form.company"
          name="company"
          required
          maxlength="100"
          autofocus
          placeholder="e.g. Fernlight Studio"
          class="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700"
      /></label>
      <label class="block text-sm font-medium text-slate-600"
        >Role <span class="text-rose-600">*</span
        ><input
          v-model="form.role"
          name="role"
          required
          maxlength="120"
          placeholder="e.g. Frontend Developer"
          class="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700"
      /></label>
      <div class="grid grid-cols-2 gap-4">
        <label class="block text-sm font-medium text-slate-600"
          >Application date *<input
            v-model="form.date"
            type="date"
            name="date"
            required
            class="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700" /></label
        ><label class="block text-sm font-medium text-slate-600"
          >Status<select
            v-model="form.status"
            name="status"
            class="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700"
          >
            <option
              v-for="status in statuses"
              :key="status"
            >
              {{ status }}
            </option>
          </select></label
        >
      </div>
      <label class="block text-sm font-medium text-slate-600"
        >Notes (optional)<textarea
          v-model="form.notes"
          name="notes"
          maxlength="2000"
          rows="3"
          class="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700"
          placeholder="Interview preparation, follow-up plans, and reminders..."
        ></textarea>
      </label>
      <p
        v-if="error"
        role="alert"
        class="text-sm text-rose-700"
      >
        {{ error }}
      </p>
      <div class="flex justify-end gap-3 border-t border-slate-100 pt-5">
        <button
          type="button"
          @click="close"
          class="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
        >
          Cancel</button
        ><button
          type="submit"
          class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Save application
        </button>
      </div>
    </form>
  </dialog>
</template>
