<script setup>
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Users,
} from 'lucide-vue-next'
import { jobs } from '../../data/jobs'
</script>

<template>
  <main class="pb-[78px]">
    <section class="overflow-hidden bg-[#e9f0e8]">
      <div
        class="mx-auto grid min-h-[520px] w-[calc(100%-28px)] max-w-[1240px] grid-cols-1 items-center gap-8 py-12 min-[801px]:grid-cols-[1fr_.88fr] min-[801px]:gap-[60px] min-[801px]:py-0 sm:w-[calc(100%-56px)]"
      >
        <div>
          <p
            class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
          >
            CAREERS AT FERNLIGHT STUDIO
          </p>
          <h1
            class="my-5 text-[48px] leading-[1.11] tracking-[-.065em] text-[#183a2d] min-[801px]:text-[clamp(48px,5.4vw,78px)]"
          >
            Make room for<br /><em class="text-[#8a7655] not-italic"
              >what's next.</em
            >
          </h1>
          <p class="max-w-[480px] text-[17px] leading-[1.8] text-[#647469]">
            Good work happens when curious people have the space to think,
            build, and learn together. Find your next opportunity with us.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-6">
            <a
              class="inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#174d35] hover:text-white"
              href="#/careers"
              >Explore open roles <ArrowRight :size="18" /></a
            ><a
              class="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-bold text-[#216947] hover:text-[#143d2c]"
              href="#/about"
              >Get to know us <ChevronRight :size="17"
            /></a>
          </div>
        </div>
        <div
          class="relative h-[210px] overflow-hidden rounded-[28px_28px_28px_100px] bg-[#1c513d] shadow-2xl min-[801px]:h-[380px] sm:h-[260px]"
          aria-hidden="true"
        >
          <div
            class="absolute -top-[155px] -left-[150px] size-[420px] rounded-full border border-white/20 shadow-[0_0_0_65px_#ffffff0a,0_0_0_130px_#ffffff08]"
          ></div>
          <div
            class="absolute -right-[210px] -bottom-[245px] size-[420px] rounded-full border border-white/20 shadow-[0_0_0_70px_#ffffff0a]"
          ></div>
          <span
            class="absolute top-[18%] right-[18%] text-[52px] text-[#d1b985]"
            >✳</span
          ><span
            class="absolute top-[29%] right-[36%] !text-xl text-[52px] text-[#d1b985]"
            >✳</span
          ><span
            class="absolute bottom-[17%] left-[16%] text-[43px] leading-[1.08] font-bold tracking-[-.065em] text-[#f4f6eb] min-[801px]:text-[clamp(43px,4.6vw,67px)]"
            >create<br />together<span class="text-[#d3b988]">.</span></span
          >
        </div>
      </div>
    </section>
    <section
      class="mx-auto w-[calc(100%-28px)] max-w-[1240px] pt-[60px] min-[601px]:pt-[84px] sm:w-[calc(100%-56px)]"
    >
      <div
        class="mb-7 flex flex-col items-start justify-between gap-5 min-[601px]:flex-row min-[601px]:items-end"
      >
        <div>
          <p
            class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
          >
            WHAT MATTERS HERE
          </p>
          <h2
            class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-[#19382c]"
          >
            Better work, together.
          </h2>
        </div>
        <a
          class="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-bold text-[#216947] hover:text-[#143d2c]"
          href="#/about"
          >More about us <ArrowRight :size="17"
        /></a>
      </div>
      <div class="grid grid-cols-1 gap-[18px] min-[801px]:grid-cols-3">
        <article
          class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]"
        >
          <span
            class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
            ><Sparkles :size="23"
          /></span>
          <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">
            Stay curious
          </h3>
          <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
            Questions and fresh perspectives help us find better answers.
          </p>
        </article>
        <article
          class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]"
        >
          <span
            class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
            ><Users :size="23"
          /></span>
          <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">
            Make space for people
          </h3>
          <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
            We listen well, share knowledge, and build with care.
          </p>
        </article>
        <article
          class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]"
        >
          <span
            class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
            ><CheckCircle2 :size="23"
          /></span>
          <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">
            Own the outcome
          </h3>
          <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
            We turn good ideas into useful, lasting work.
          </p>
        </article>
      </div>
    </section>
    <section
      class="mx-auto w-[calc(100%-28px)] max-w-[1240px] pt-[60px] min-[601px]:pt-[84px] sm:w-[calc(100%-56px)]"
    >
      <div
        class="mb-7 flex flex-col items-start justify-between gap-5 min-[601px]:flex-row min-[601px]:items-end"
      >
        <div>
          <p
            class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
          >
            OPPORTUNITIES
          </p>
          <h2
            class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-[#19382c]"
          >
            Find your place.
          </h2>
        </div>
        <a
          class="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-bold text-[#216947] hover:text-[#143d2c]"
          href="#/careers"
          >See all roles <ArrowRight :size="17"
        /></a>
      </div>
      <div class="overflow-hidden rounded-2xl border border-[#e3ebe3] bg-white">
        <a
          v-for="job in jobs.slice(0, 2)"
          :key="job.slug"
          class="flex items-center justify-between gap-5 border-b border-[#e9eee9] px-[22px] py-[26px] last:border-b-0 hover:bg-[#f8fbf8] sm:px-[30px]"
          :href="`#/jobs/${job.slug}`"
          ><span class="flex flex-col gap-2"
            ><small class="text-[11px] font-bold text-[#6f9679]"
              >{{ job.team }} · {{ job.location }}</small
            ><strong
              class="text-lg tracking-[-.025em] text-[#223a2c] sm:text-xl"
              >{{ job.title }}</strong
            ></span
          ><span
            class="grid size-[38px] shrink-0 place-items-center rounded-full bg-[#eaf3eb] text-[#266d4c]"
            ><ArrowUpRight :size="20" /></span
        ></a>
      </div>
    </section>
    <section
      class="mx-auto mt-[58px] flex w-[calc(100%-28px)] max-w-[1240px] flex-col items-start justify-between gap-[30px] rounded-[20px] bg-[#1b4c39] px-[26px] py-8 text-white min-[601px]:mt-[86px] min-[601px]:flex-row min-[601px]:items-center min-[601px]:px-11 min-[601px]:py-10 sm:w-[calc(100%-56px)]"
    >
      <div>
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] !text-[#b6d1b7] text-[#478064]"
        >
          YOUR NEXT CHAPTER
        </p>
        <h2
          class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-white"
        >
          Ready to see where you could go?
        </h2>
        <p class="mt-2.5 text-[13px] text-[#d0dfd4]">
          Explore the roles and find the one that fits your strengths.
        </p>
      </div>
      <a
        class="inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg !bg-[#f4f5e9] bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap !text-[#214c38] text-white hover:!bg-white hover:bg-[#174d35] hover:text-white"
        href="#/careers"
        >View open roles <ArrowRight :size="18"
      /></a>
    </section>
  </main>
</template>
