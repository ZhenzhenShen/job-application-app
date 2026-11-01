<script setup>
import { computed, ref } from 'vue'
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Search,
} from 'lucide-vue-next'
import { jobs } from '../../data/jobs'

const search = ref('')
const team = ref('All teams')
const teams = ['All teams', ...new Set(jobs.map((job) => job.team))]
const visibleJobs = computed(() =>
  jobs.filter(
    (job) =>
      (team.value === 'All teams' || job.team === team.value) &&
      `${job.title} ${job.team} ${job.location}`
        .toLowerCase()
        .includes(search.value.trim().toLowerCase()),
  ),
)

function clearFilters() {
  search.value = ''
  team.value = 'All teams'
}
</script>

<template>
  <main
    class="mx-auto min-h-[calc(100vh-180px)] w-[calc(100%-28px)] max-w-[1240px] pt-[42px] pb-[60px] min-[601px]:pt-[58px] min-[601px]:pb-[90px] sm:w-[calc(100%-56px)]"
  >
    <div class="mb-[45px] max-w-[760px]">
      <p class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]">
        OPEN OPPORTUNITIES
      </p>
      <h1
        class="my-[13px] text-[clamp(39px,4.4vw,59px)] leading-[1.15] tracking-[-.06em] text-[#19382c]"
      >
        Find work that moves you.
      </h1>
      <p class="text-base leading-[1.8] text-[#6f8073]">
        Explore our current openings across New Zealand. Choose a role to learn
        more and apply.
      </p>
    </div>
    <div class="mb-[29px] flex flex-col gap-3 min-[601px]:flex-row">
      <label
        class="relative flex w-full flex-1 items-center min-[601px]:max-w-[450px]"
        ><Search
          :size="18"
          class="pointer-events-none absolute left-[15px] text-[#8d9d90]" /><span
          class="sr-only"
          >Search roles</span
        ><input
          v-model="search"
          type="search"
          class="min-h-[47px] w-full rounded-lg border border-[#dce6dd] bg-white py-2.5 pr-4 pl-[42px] text-[13px] text-[#37503c]"
          placeholder="Search roles or locations" /></label
      ><label class="flex items-center"
        ><span class="sr-only">Filter by team</span
        ><select
          v-model="team"
          class="min-h-[47px] w-full rounded-lg border border-[#dce6dd] bg-white px-4 py-2.5 text-[13px] text-[#37503c]"
        >
          <option
            v-for="item in teams"
            :key="item"
          >
            {{ item }}
          </option>
        </select></label
      >
    </div>
    <div class="mb-4 flex items-center justify-between">
      <h2 class="m-0 text-xl">Open roles</h2>
      <span class="text-xs text-[#869388]"
        >{{ visibleJobs.length }}
        {{ visibleJobs.length === 1 ? 'position' : 'positions' }}</span
      >
    </div>
    <div
      v-if="visibleJobs.length"
      class="overflow-hidden rounded-2xl border border-[#e3ebe3] bg-white"
    >
      <a
        v-for="job in visibleJobs"
        :key="job.slug"
        class="flex items-center justify-between gap-5 border-b border-[#e9eee9] px-[22px] py-[26px] last:border-b-0 hover:bg-[#f8fbf8] sm:px-[30px]"
        :href="`#/jobs/${job.slug}`"
        ><span class="flex flex-col gap-2"
          ><small class="text-[11px] font-bold text-[#6f9679]"
            >{{ job.team }} · {{ job.location }} · {{ job.type }}</small
          ><strong
            class="text-lg tracking-[-.025em] text-[#223a2c] sm:text-xl"
            >{{ job.title }}</strong
          ><span class="text-[13px] text-[#78867c]">{{
            job.summary
          }}</span></span
        ><span
          class="grid size-[38px] shrink-0 place-items-center rounded-full bg-[#eaf3eb] text-[#266d4c]"
          ><ArrowUpRight :size="20" /></span
      ></a>
    </div>
    <div
      v-else
      class="flex flex-col items-center rounded-2xl border border-[#e3ebe3] bg-white px-6 py-[70px] text-center text-[#6b8070]"
    >
      <Search :size="29" />
      <h3 class="mt-[14px] mb-1 text-[#213b2c]">No matching roles</h3>
      <p class="mb-[18px] text-[13px]">Try another keyword or team.</p>
      <button
        type="button"
        class="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-bold text-[#216947] hover:text-[#143d2c]"
        @click="clearFilters"
      >
        Clear filters <ArrowRight :size="17" />
      </button>
    </div>
    <div
      class="mt-[35px] flex items-start gap-[17px] rounded-[13px] border border-[#dceadd] bg-[#eff6ef] px-[26px] py-[23px] text-[#2a7550]"
    >
      <HeartHandshake :size="25" />
      <div>
        <h3 class="mb-1 text-[15px] text-[#28553c]">
          Don't see the right role?
        </h3>
        <p class="text-[13px] leading-[1.6] text-[#6d8071]">
          Our openings change as the team grows. Check back soon for new
          opportunities.
        </p>
      </div>
    </div>
  </main>
</template>
