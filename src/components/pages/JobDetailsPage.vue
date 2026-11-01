<script setup>
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  MapPin,
} from 'lucide-vue-next'
defineProps({ selectedJob: { type: Object, required: true } })
</script>

<template>
  <main
    class="mx-auto min-h-[calc(100vh-180px)] w-[calc(100%-28px)] max-w-[1240px] pt-[42px] pb-[60px] min-[601px]:pt-[58px] min-[601px]:pb-[90px] sm:w-[calc(100%-56px)]"
  >
    <a
      class="mb-[26px] inline-block text-[13px] font-bold text-[#367754]"
      href="#/careers"
      >← All open roles</a
    >
    <div
      class="flex flex-col items-start justify-between gap-[35px] border-b border-[#dfe8df] pb-[42px] min-[601px]:flex-row min-[601px]:items-end"
    >
      <div class="max-w-[760px]">
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
        >
          {{ selectedJob.team.toUpperCase() }}
        </p>
        <h1
          class="my-[13px] text-[clamp(39px,4.4vw,59px)] leading-[1.15] tracking-[-.06em] text-[#19382c]"
        >
          {{ selectedJob.title }}
        </h1>
        <p class="text-base leading-[1.8] text-[#6f8073]">
          {{ selectedJob.summary }}
        </p>
        <div
          class="mt-[22px] flex flex-wrap gap-3 text-[13px] text-[#576c5b] min-[601px]:gap-[23px]"
        >
          <span class="flex items-center gap-2"
            ><MapPin :size="17" />{{ selectedJob.location }}</span
          ><span class="flex items-center gap-2"
            ><BriefcaseBusiness :size="17" />{{ selectedJob.type }}</span
          >
        </div>
      </div>
      <a
        class="inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#174d35] hover:text-white"
        :href="`#/apply/${selectedJob.slug}`"
        >Apply now <ArrowRight :size="18"
      /></a>
    </div>
    <div
      class="mt-12 grid grid-cols-1 gap-[35px] min-[1001px]:grid-cols-[minmax(0,1fr)_310px] min-[1100px]:gap-[75px]"
    >
      <article>
        <section class="mb-[45px]">
          <h2 class="mb-[18px] text-2xl text-[#1f3e2d]">What you'll do</h2>
          <ul class="list-disc pl-5">
            <li
              class="mb-[13px] text-sm leading-[1.8] text-[#647668]"
              v-for="item in selectedJob.responsibilities"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section class="mb-[45px]">
          <h2 class="mb-[18px] text-2xl text-[#1f3e2d]">What you'll bring</h2>
          <ul class="list-disc pl-5">
            <li
              class="mb-[13px] text-sm leading-[1.8] text-[#647668]"
              v-for="item in selectedJob.requirements"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section class="mb-[45px]">
          <h2 class="mb-[18px] text-2xl text-[#1f3e2d]">
            Working at Fernlight
          </h2>
          <p class="mb-[13px] text-sm leading-[1.8] text-[#647668]">
            We value thoughtful work, open communication, and room to grow. Our
            team works across New Zealand and makes time to learn from one
            another.
          </p>
        </section>
      </article>
      <aside
        class="max-w-[450px] self-start rounded-[15px] border border-[#dfe9df] bg-white p-[27px]"
      >
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
        >
          YOUR NEXT STEP
        </p>
        <h3 class="mt-2.5 mb-2 text-[21px]">Interested in this role?</h3>
        <p class="text-[13px] leading-[1.7] text-[#758377]">
          Tell us about your experience and what you would bring to the team.
        </p>
        <a
          class="my-[15px] inline-flex min-h-[49px] w-full cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#174d35] hover:text-white"
          :href="`#/apply/${selectedJob.slug}`"
          >Apply for this role <ArrowRight :size="18" /></a
        ><a
          class="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-bold text-[#216947] hover:text-[#143d2c]"
          href="#/process"
          >How we hire <ChevronRight :size="17"
        /></a>
      </aside>
    </div>
  </main>
</template>
