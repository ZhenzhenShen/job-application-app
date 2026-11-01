import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getJob } from '../data/jobs'

export function useHashRoute() {
  const path = ref(window.location.hash.slice(1) || '/')
  const route = computed(() => path.value.split('/').filter(Boolean))
  const page = computed(() => route.value[0] || 'home')
  const selectedJob = computed(() => getJob(route.value[1]))

  function syncRoute() {
    path.value = window.location.hash.slice(1) || '/'
    window.scrollTo(0, 0)
  }

  onMounted(() => window.addEventListener('hashchange', syncRoute))
  onUnmounted(() => window.removeEventListener('hashchange', syncRoute))

  return { page, selectedJob }
}
