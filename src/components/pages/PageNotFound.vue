<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <main
    class="mx-auto min-h-[calc(100vh-180px)] w-[calc(100%-28px)] max-w-[1240px] pt-[42px] pb-[60px] min-[601px]:pt-[58px] min-[601px]:pb-[90px] sm:w-[calc(100%-56px)]"
  >
    <div class="mb-[45px] max-w-[760px]">
      <p class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]">
        PAGE NOT FOUND
      </p>
      <h1
        class="my-[13px] text-[clamp(39px,4.4vw,59px)] leading-[1.15] tracking-[-.06em] text-[#19382c]"
      >
        We couldn't find that page.
      </h1>
      <p class="text-base leading-[1.8] text-[#6f8073]">
        Explore the current roles or return to the home page.
      </p>
      <a
        class="mt-[21px] inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap text-white hover:bg-[#174d35] hover:text-white"
        href="#/careers"
        >See open roles <ArrowRight :size="18"
      /></a>
    </div>
  </main>
</template>
