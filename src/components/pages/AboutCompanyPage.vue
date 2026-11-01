<script setup>
import { ArrowRight, HeartHandshake, Sparkles, Users } from 'lucide-vue-next'
</script>

<template>
  <main
    class="mx-auto min-h-[calc(100vh-180px)] w-[calc(100%-28px)] max-w-[1240px] pt-[42px] pb-[60px] min-[601px]:pt-[58px] min-[601px]:pb-[90px] sm:w-[calc(100%-56px)]"
  >
    <div class="mb-[45px] max-w-[760px]">
      <p class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]">
        ABOUT FERNLIGHT
      </p>
      <h1
        class="my-[13px] text-[clamp(39px,4.4vw,59px)] leading-[1.15] tracking-[-.06em] text-[#19382c]"
      >
        Small details. Meaningful impact.
      </h1>
      <p class="text-base leading-[1.8] text-[#6f8073]">
        Fernlight Studio is a fictional New Zealand company created for this
        careers site demo. Our story shows the kind of thoughtful,
        people-focused workplace this application is designed for.
      </p>
    </div>
    <div
      class="mb-[25px] grid grid-cols-1 items-center gap-[14px] rounded-[19px] bg-[#e8f0e8] px-[26px] py-8 min-[601px]:grid-cols-[.8fr_1fr] min-[601px]:gap-[60px] min-[601px]:p-12"
    >
      <div>
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]"
        >
          OUR APPROACH
        </p>
        <h2
          class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-[#19382c]"
        >
          Build with purpose and care.
        </h2>
      </div>
      <p class="text-base leading-[1.9] text-[#5f7463]">
        We believe useful products start with listening. Designers, developers,
        and customer teams work together to turn real needs into simple
        experiences. We make room for new ideas, honest feedback, and steady
        improvement.
      </p>
    </div>
    <div class="mt-5 grid grid-cols-1 gap-[18px] min-[801px]:grid-cols-3">
      <article class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]">
        <span
          class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
          ><Sparkles :size="23"
        /></span>
        <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">Curiosity</h3>
        <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
          We ask why, try new approaches, and keep learning.
        </p>
      </article>
      <article class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]">
        <span
          class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
          ><Users :size="23"
        /></span>
        <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">
          Collaboration
        </h3>
        <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
          Different viewpoints make the work stronger.
        </p>
      </article>
      <article class="rounded-[17px] border border-[#e4ebe3] bg-white p-[30px]">
        <span
          class="grid size-11 place-items-center rounded-xl bg-[#e7f2e9] text-[#27724f]"
          ><HeartHandshake :size="23"
        /></span>
        <h3 class="mt-[22px] mb-[9px] text-[17px] text-[#213b2d]">Care</h3>
        <p class="m-0 text-[13px] leading-[1.75] text-[#718075]">
          We consider the people who use what we create.
        </p>
      </article>
    </div>
    <section
      class="mt-[58px] flex flex-col items-start justify-between gap-[30px] rounded-[20px] bg-[#1b4c39] px-[26px] py-8 text-white min-[601px]:mt-[86px] min-[601px]:flex-row min-[601px]:items-center min-[601px]:px-11 min-[601px]:py-10"
    >
      <div>
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#b6d1b7]"
        >
          COME BUILD WITH US
        </p>
        <h2
          class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-white"
        >
          Find a role that fits.
        </h2>
        <p class="mt-2.5 text-[13px] text-[#d0dfd4]">
          See where your skills and ideas could take you next.
        </p>
      </div>
      <a
        class="inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg !bg-[#f4f5e9] bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap !text-[#214c38] text-white hover:!bg-white hover:bg-[#174d35] hover:text-white"
        href="#/careers"
        >Explore open roles <ArrowRight :size="18"
      /></a>
    </section>
  </main>
</template>
