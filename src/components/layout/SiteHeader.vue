<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-vue-next'

defineProps({ currentPage: { type: String, required: true } })
const menuOpen = ref(false)
function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="relative border-b border-[#e5ebe5] bg-white">
    <div
      class="mx-auto flex min-h-[68px] w-[calc(100%-28px)] max-w-[1240px] items-center justify-between sm:min-h-20 sm:w-[calc(100%-56px)]"
    >
      <a
        class="inline-flex items-center gap-2.5 text-xl font-extrabold tracking-[-.055em] text-[#194735] sm:text-[23px]"
        href="#/"
        aria-label="Fernlight Studio home"
        @click="closeMenu"
        ><span
          class="grid size-[37px] place-items-center rounded-[10px] bg-[#19513c] text-white"
          ><Sparkles
            :size="20"
            :stroke-width="2.2" /></span
        ><span>fernlight<span class="text-[#bd9b61]">.</span></span></a
      >
      <nav
        class="absolute top-[70px] right-[14px] left-[14px] z-10 flex-col items-stretch gap-0 rounded-xl border border-[#e5ebe5] bg-white p-3 text-[13px] font-semibold text-[#536258] shadow-lg min-[801px]:static min-[801px]:flex min-[801px]:flex-row min-[801px]:items-center min-[801px]:gap-4 min-[801px]:border-0 min-[801px]:bg-transparent min-[801px]:p-0 min-[801px]:shadow-none xl:gap-7"
        :class="menuOpen ? 'flex' : 'hidden'"
        aria-label="Main navigation"
      >
        <a
          class="block px-3 py-3 hover:text-[#1d6445] aria-[current=page]:text-[#1d6445] min-[801px]:p-0"
          href="#/"
          :aria-current="currentPage === 'home' ? 'page' : undefined"
          @click="closeMenu"
          >Home</a
        >
        <a
          class="block px-3 py-3 hover:text-[#1d6445] aria-[current=page]:text-[#1d6445] min-[801px]:p-0"
          href="#/careers"
          :aria-current="
            ['careers', 'jobs', 'apply'].includes(currentPage)
              ? 'page'
              : undefined
          "
          @click="closeMenu"
          >Open roles</a
        >
        <a
          class="block px-3 py-3 hover:text-[#1d6445] aria-[current=page]:text-[#1d6445] min-[801px]:p-0"
          href="#/about"
          :aria-current="currentPage === 'about' ? 'page' : undefined"
          @click="closeMenu"
          >About us</a
        >
        <a
          class="block px-3 py-3 hover:text-[#1d6445] aria-[current=page]:text-[#1d6445] min-[801px]:p-0"
          href="#/process"
          :aria-current="currentPage === 'process' ? 'page' : undefined"
          @click="closeMenu"
          >How we hire</a
        >
        <a
          class="block px-3 py-3 hover:text-[#1d6445] aria-[current=page]:text-[#1d6445] min-[801px]:p-0"
          href="#/tracker"
          :aria-current="currentPage === 'tracker' ? 'page' : undefined"
          @click="closeMenu"
          >My tracker</a
        >
        <a
          class="inline-flex items-center gap-2 rounded-lg bg-[#e9f3eb] px-4 py-3 text-[#1b6243] min-[801px]:ml-2"
          href="#/careers"
          @click="closeMenu"
          >Explore careers <ArrowUpRight :size="15"
        /></a>
      </nav>
      <button
        class="grid place-items-center border-0 bg-transparent text-[#194735] min-[801px]:hidden"
        type="button"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <X
          v-if="menuOpen"
          :size="21"
        /><Menu
          v-else
          :size="21"
        />
      </button>
    </div>
  </header>
</template>
