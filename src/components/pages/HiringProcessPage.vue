<script setup>
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <main
    class="mx-auto min-h-[calc(100vh-180px)] w-[calc(100%-28px)] max-w-[1240px] pt-[42px] pb-[60px] min-[601px]:pt-[58px] min-[601px]:pb-[90px] sm:w-[calc(100%-56px)]"
  >
    <div class="mb-[45px] max-w-[760px]">
      <p class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#478064]">
        HOW WE HIRE
      </p>
      <h1
        class="my-[13px] text-[clamp(39px,4.4vw,59px)] leading-[1.15] tracking-[-.06em] text-[#19382c]"
      >
        A clear path from hello to what's next.
      </h1>
      <p class="text-base leading-[1.8] text-[#6f8073]">
        We want you to know what to expect. The steps below are an example
        recruitment process for this demo company.
      </p>
    </div>
    <div class="border-t border-[#dce6dc]">
      <article
        class="grid grid-cols-[48px_1fr] gap-[14px] border-b border-[#dce6dc] py-[31px] min-[601px]:grid-cols-[90px_1fr] min-[601px]:gap-[30px]"
      >
        <span class="text-2xl font-bold text-[#6c9c75]">01</span>
        <div>
          <h2 class="mb-2 text-[22px] text-[#213d2b]">Apply online</h2>
          <p class="m-0 text-sm leading-[1.75] text-[#728274]">
            Choose a role and share your details, CV, and a short cover letter.
          </p>
        </div>
      </article>
      <article
        class="grid grid-cols-[48px_1fr] gap-[14px] border-b border-[#dce6dc] py-[31px] min-[601px]:grid-cols-[90px_1fr] min-[601px]:gap-[30px]"
      >
        <span class="text-2xl font-bold text-[#6c9c75]">02</span>
        <div>
          <h2 class="mb-2 text-[22px] text-[#213d2b]">Initial conversation</h2>
          <p class="m-0 text-sm leading-[1.75] text-[#728274]">
            A hiring team member gets to know your experience, goals, and
            questions.
          </p>
        </div>
      </article>
      <article
        class="grid grid-cols-[48px_1fr] gap-[14px] border-b border-[#dce6dc] py-[31px] min-[601px]:grid-cols-[90px_1fr] min-[601px]:gap-[30px]"
      >
        <span class="text-2xl font-bold text-[#6c9c75]">03</span>
        <div>
          <h2 class="mb-2 text-[22px] text-[#213d2b]">Role conversation</h2>
          <p class="m-0 text-sm leading-[1.75] text-[#728274]">
            Meet people you would work with and discuss how you approach the
            work.
          </p>
        </div>
      </article>
      <article
        class="grid grid-cols-[48px_1fr] gap-[14px] border-b border-[#dce6dc] py-[31px] min-[601px]:grid-cols-[90px_1fr] min-[601px]:gap-[30px]"
      >
        <span class="text-2xl font-bold text-[#6c9c75]">04</span>
        <div>
          <h2 class="mb-2 text-[22px] text-[#213d2b]">Decision and feedback</h2>
          <p class="m-0 text-sm leading-[1.75] text-[#728274]">
            We share an outcome and next steps as clearly as possible.
          </p>
        </div>
      </article>
    </div>
    <div
      class="mt-[35px] flex items-start gap-[17px] rounded-[13px] border border-[#dceadd] bg-[#eff6ef] px-[26px] py-[23px] text-[#2a7550]"
    >
      <CheckCircle2 :size="25" />
      <div>
        <h3 class="mb-1 text-[15px] text-[#28553c]">Good to know</h3>
        <p class="text-[13px] leading-[1.6] text-[#6d8071]">
          This site is a demo. Applications are only sent when a receiving
          service has been configured.
        </p>
      </div>
    </div>
    <section
      class="mt-[58px] flex flex-col items-start justify-between gap-[30px] rounded-[20px] bg-[#1b4c39] px-[26px] py-8 text-white min-[601px]:mt-[86px] min-[601px]:flex-row min-[601px]:items-center min-[601px]:px-11 min-[601px]:py-10"
    >
      <div>
        <p
          class="m-0 text-[11px] font-extrabold tracking-[.19em] text-[#b6d1b7]"
        >
          READY WHEN YOU ARE
        </p>
        <h2
          class="mt-2.5 text-[clamp(28px,3vw,38px)] tracking-[-.045em] text-white"
        >
          Take a look at our roles.
        </h2>
      </div>
      <a
        class="inline-flex min-h-[49px] w-fit cursor-pointer items-center justify-center gap-4 rounded-lg !bg-[#f4f5e9] bg-[#1d6445] px-[21px] text-[13px] font-bold whitespace-nowrap !text-[#214c38] text-white hover:!bg-white hover:bg-[#174d35] hover:text-white"
        href="#/careers"
        >View open roles <ArrowRight :size="18"
      /></a>
    </section>
  </main>
</template>
