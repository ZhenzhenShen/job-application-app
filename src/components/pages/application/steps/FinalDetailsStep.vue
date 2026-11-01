<script setup>
defineProps({ form: { type: Object, required: true } })
</script>

<template>
  <section
    data-cy="final-details-step"
    class="border-b border-[#e9eee9] pt-[33px] pb-[31px]"
    aria-labelledby="motivation-heading"
  >
    <div class="mb-[23px] flex items-start gap-[13px]">
      <span
        class="grid size-[33px] shrink-0 place-items-center rounded-lg bg-[#e9f3eb] text-xs font-extrabold text-[#29704f]"
        >03</span
      >
      <div>
        <h3
          id="motivation-heading"
          class="mt-0.5 mb-1 text-[17px] text-[#20372e]"
        >
          A little more about you
        </h3>
        <p class="m-0 text-xs text-[#89958e]">
          Tell us why this role interests you
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-x-[18px] gap-y-5 min-[601px]:grid-cols-2">
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d] min-[601px]:col-span-2"
        ><span
          >Do you have the legal right to work in New Zealand?
          <b class="text-[#bc674d]">*</b></span
        ><select
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model="form.workAuthorization"
          data-cy="work-authorization"
          name="workAuthorization"
          required
        >
          <option
            value=""
            disabled
          >
            Please select
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="sponsorship">I would need visa sponsorship</option>
        </select></label
      >
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d] min-[601px]:col-span-2"
        ><span>Cover letter <b class="text-[#bc674d]">*</b></span
        ><textarea
          class="min-h-[45px] min-h-[140px] w-full resize-y rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] leading-[1.6] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.coverLetter"
          data-cy="cover-letter"
          name="coverLetter"
          required
          minlength="30"
          maxlength="2000"
          rows="6"
          placeholder="Tell us about your experience, projects you enjoyed, and what you would bring to the team..."
        ></textarea
        ><small class="-mt-1 self-end text-[11px] font-normal text-[#97a39b]"
          >At least 30 characters · {{ form.coverLetter.length }} / 2000</small
        ></label
      >
    </div>
  </section>
  <label
    class="my-[27px] flex cursor-pointer items-start gap-[11px] text-xs leading-[1.6] text-[#68786d]"
    ><input
      class="mt-0.5 size-4 shrink-0 accent-[#24734f]"
      v-model="form.consent"
      data-cy="consent"
      name="consent"
      type="checkbox"
      required
    /><span
      >I confirm that the information above is accurate and agree to its use for
      this recruitment process.<b class="text-[#bc674d]"> *</b></span
    ></label
  >
</template>
