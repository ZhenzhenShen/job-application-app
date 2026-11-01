<script setup>
defineProps({ form: { type: Object, required: true } })
</script>

<template>
  <section
    data-cy="personal-details-step"
    class="border-b border-[#e9eee9] pt-[33px] pb-[31px]"
    aria-labelledby="personal-heading"
  >
    <div class="mb-[23px] flex items-start gap-[13px]">
      <span
        class="grid size-[33px] shrink-0 place-items-center rounded-lg bg-[#e9f3eb] text-xs font-extrabold text-[#29704f]"
        >01</span
      >
      <div>
        <h3
          id="personal-heading"
          class="mt-0.5 mb-1 text-[17px] text-[#20372e]"
        >
          Your details
        </h3>
        <p class="m-0 text-xs text-[#89958e]">How should we contact you?</p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-x-[18px] gap-y-5 min-[601px]:grid-cols-2">
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span>First name <b class="text-[#bc674d]">*</b></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.firstName"
          data-cy="first-name"
          name="firstName"
          autocomplete="given-name"
          required
          maxlength="80"
          placeholder="Your first name"
      /></label>
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span>Last name <b class="text-[#bc674d]">*</b></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.lastName"
          data-cy="last-name"
          name="lastName"
          autocomplete="family-name"
          required
          maxlength="80"
          placeholder="Your last name"
      /></label>
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span>Email address <b class="text-[#bc674d]">*</b></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.email"
          data-cy="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          maxlength="254"
          placeholder="name@example.com"
      /></label>
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span>Phone number <b class="text-[#bc674d]">*</b></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.phone"
          data-cy="phone"
          name="phone"
          type="tel"
          autocomplete="tel"
          required
          maxlength="40"
          placeholder="+64 21 000 0000"
      /></label>
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d] min-[601px]:col-span-2"
        ><span>City / region <b class="text-[#bc674d]">*</b></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.location"
          data-cy="location"
          name="location"
          autocomplete="address-level2"
          required
          maxlength="120"
          placeholder="e.g. Auckland, New Zealand"
      /></label>
    </div>
  </section>
</template>
