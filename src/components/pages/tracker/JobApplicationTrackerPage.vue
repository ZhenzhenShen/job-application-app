<script setup>
import { computed, nextTick, ref } from 'vue'
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleCheck,
  ListFilter,
  Pencil,
  Plus,
  Search,
  Send,
  Sparkles,
  Users,
} from 'lucide-vue-next'
import ApplicationForm from './TrackerApplicationForm.vue'
import { useApplications } from '../../../composables/useApplications'
import { statuses } from '../../../data/trackerApplications'

const {
  applications,
  search,
  statusFilter,
  dateOrder,
  filteredApplications,
  stats,
  storageWarning,
  saveApplication,
  updateStatus,
} = useApplications()
const form = ref(null)
const editing = ref(null)
const formKey = ref(0)
const message = ref('')
const cards = computed(() => [
  {
    title: 'All applications',
    value: stats.value.total,
    icon: BriefcaseBusiness,
    tone: 'bg-indigo-50 text-indigo-600',
    test: 'total',
  },
  {
    title: 'Awaiting reply',
    value: stats.value.Applied,
    icon: Send,
    tone: 'bg-sky-50 text-sky-600',
    test: 'applied',
  },
  {
    title: 'Interviewing',
    value: stats.value.Interview,
    icon: Users,
    tone: 'bg-amber-50 text-amber-600',
    test: 'interview',
  },
  {
    title: 'Offers',
    value: stats.value.Offer,
    icon: CircleCheck,
    tone: 'bg-emerald-50 text-emerald-600',
    test: 'offer',
  },
])
const tones = {
  Applied: 'bg-sky-50 text-sky-700',
  Interview: 'bg-amber-50 text-amber-800',
  Offer: 'bg-emerald-50 text-emerald-700',
  Rejected: 'bg-rose-50 text-rose-700',
}
async function openForm(application = null) {
  editing.value = application ? { ...application } : null
  // Remounting resets unsaved fields when opening a new form.
  formKey.value++
  await nextTick()
  form.value.open()
}
function save(values) {
  if (saveApplication(values, editing.value?.id)) {
    message.value = editing.value
      ? 'Application updated.'
      : 'Application added.'
    form.value.close()
  } else
    message.value =
      'Could not save the application. Check the details and try again.'
}
function clearFilters() {
  search.value = ''
  statusFilter.value = 'All'
}
</script>

<template>
  <div class="min-h-screen bg-[#f7f8fc] text-slate-800 antialiased">
    <main class="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-12">
      <div class="mb-8 flex flex-wrap items-center justify-between gap-5">
        <div>
          <p
            class="mb-3 text-[10px] font-bold tracking-[.18em] text-indigo-500"
          >
            CAREER WORKSPACE
          </p>
          <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
            My application tracker
          </h1>
          <p class="mt-3 text-sm leading-6 text-slate-500">
            Organise your applications and keep track of what comes next.
          </p>
        </div>
        <button
          @click="openForm()"
          class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          <Plus :size="18" />Add application
        </button>
      </div>
      <div class="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <section
          v-for="card in cards"
          :key="card.title"
          class="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6"
        >
          <div class="mb-5 flex items-center justify-between">
            <p class="text-xs font-medium text-slate-500 sm:text-sm">
              {{ card.title }}
            </p>
            <span
              class="rounded-xl p-2.5"
              :class="card.tone"
              ><component
                :is="card.icon"
                :size="19"
            /></span>
          </div>
          <p
            :data-cy="`stat-${card.test}`"
            class="text-3xl font-semibold tracking-tight"
          >
            {{ card.value }}
          </p>
        </section>
      </div>
      <p
        v-if="storageWarning"
        role="alert"
        class="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        {{ storageWarning }}
      </p>
      <p
        v-if="message"
        role="status"
        class="mb-5 flex items-center gap-2 text-sm text-indigo-700"
      >
        <Check :size="16" />{{ message }}
      </p>
      <section
        aria-labelledby="list-heading"
        class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white"
      >
        <div
          class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5"
        >
          <div class="flex items-center gap-3">
            <h2
              id="list-heading"
              class="text-lg font-semibold"
            >
              Applications
            </h2>
            <span
              class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500"
              >{{ applications.length }} records</span
            >
          </div>
          <p class="flex items-center gap-1.5 text-xs text-slate-400">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span
            >{{
              storageWarning
                ? 'Local storage unavailable'
                : 'Saved in this browser'
            }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3 p-5 sm:px-6">
          <label class="relative min-w-48 flex-1"
            ><span class="sr-only">Search company or role</span
            ><Search
              :size="17"
              class="pointer-events-none absolute top-3 left-3 text-slate-400" /><input
              v-model="search"
              data-cy="search"
              type="search"
              placeholder="Search company or role…"
              class="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 pl-10 text-sm text-slate-700" /></label
          ><label class="relative"
            ><span class="sr-only">Filter by status</span
            ><ListFilter
              :size="16"
              class="pointer-events-none absolute top-3 left-3 text-slate-400"
            /><select
              v-model="statusFilter"
              data-cy="status-filter"
              class="block w-full min-w-40 rounded-lg border border-slate-200 bg-white px-3 py-2.5 pl-9 text-sm text-slate-700"
            >
              <option value="All">All statuses</option>
              <option
                v-for="status in statuses"
                :key="status"
              >
                {{ status }}
              </option>
            </select></label
          ><label
            ><span class="sr-only">Sort by date</span
            ><select
              v-model="dateOrder"
              data-cy="date-order"
              class="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select></label
          >
        </div>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[740px] text-left text-sm">
            <caption class="sr-only">
              Job applications
            </caption>
            <thead
              class="border-y border-slate-100 bg-slate-50/70 text-xs text-slate-500"
            >
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3.5 font-medium"
                >
                  Company / role
                </th>
                <th
                  scope="col"
                  class="px-5 py-3.5 font-medium"
                >
                  Applied on
                </th>
                <th
                  scope="col"
                  class="px-5 py-3.5 font-medium"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-5 py-3.5 font-medium"
                >
                  Notes
                </th>
                <th
                  scope="col"
                  class="px-6 py-3.5 text-right font-medium"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="item in filteredApplications"
                :key="item.id"
                data-cy="application-row"
                class="transition hover:bg-slate-50/70"
              >
                <td class="px-6 py-5">
                  <div class="flex items-center gap-3">
                    <span
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-semibold text-indigo-600"
                      >{{ item.company.slice(0, 2).toUpperCase() }}</span
                    >
                    <div>
                      <p class="font-semibold text-slate-800">
                        {{ item.company }}
                      </p>
                      <p class="mt-1 text-xs text-slate-500">{{ item.role }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 text-xs whitespace-nowrap text-slate-500">
                  <span class="flex items-center gap-2"
                    ><CalendarDays :size="14" />{{ item.date }}</span
                  >
                </td>
                <td class="px-5 py-5">
                  <select
                    :value="item.status"
                    @change="updateStatus(item.id, $event.target.value)"
                    :aria-label="`${item.company} application status`"
                    data-cy="row-status"
                    :class="tones[item.status]"
                    class="rounded-full border-0 px-3 py-1.5 text-xs font-medium"
                  >
                    <option
                      v-for="status in statuses"
                      :key="status"
                    >
                      {{ status }}
                    </option>
                  </select>
                </td>
                <td class="max-w-48 px-5 py-5">
                  <p
                    class="truncate text-xs text-slate-400"
                    :title="item.notes"
                  >
                    {{ item.notes || '—' }}
                  </p>
                </td>
                <td class="px-6 py-5 text-right">
                  <button
                    @click="openForm(item)"
                    :aria-label="`Edit ${item.company}`"
                    class="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Pencil :size="16" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          v-if="!filteredApplications.length"
          class="px-6 py-16 text-center"
        >
          <Search
            :size="28"
            class="mx-auto mb-4 text-slate-300"
          />
          <h3 class="font-semibold">
            {{
              applications.length
                ? 'No matching applications'
                : 'Start with your first application'
            }}
          </h3>
          <p class="mt-2 text-sm text-slate-400">
            {{
              applications.length
                ? 'Try another keyword or status.'
                : 'Add an application to track your next opportunity.'
            }}
          </p>
          <button
            v-if="search || statusFilter !== 'All'"
            @click="clearFilters"
            class="mt-5 inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
          >
            Clear filters</button
          ><button
            v-else
            @click="openForm()"
            class="mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Add application
          </button>
        </div>
        <div
          class="flex flex-wrap justify-between gap-2 border-t border-slate-100 px-6 py-4 text-xs text-slate-400"
        >
          <span data-cy="result-count"
            >Showing {{ filteredApplications.length }} /
            {{ applications.length }} applications</span
          ><span>Dashboard totals include all applications</span>
        </div>
      </section>
      <div
        class="mt-6 flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 text-xs leading-6 text-indigo-700"
      >
        <Sparkles
          :size="17"
          class="mt-0.5 shrink-0"
        />
        <p>
          Stay on top of your search. The starting applications are fictional;
          your changes stay in this browser.
        </p>
      </div>
    </main>
    <ApplicationForm
      :key="formKey"
      ref="form"
      :application="editing"
      @save="save"
    />
  </div>
</template>
