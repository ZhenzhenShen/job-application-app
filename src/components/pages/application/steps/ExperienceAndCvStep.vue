<script setup>
import { UploadCloud } from 'lucide-vue-next'

defineProps({
  form: { type: Object, required: true },
  resume: { type: Object, default: null },
  fileError: { type: String, default: '' },
})
const emit = defineEmits(['resume-change'])
</script>

<template>
  <section
    data-cy="experience-and-cv-step"
    class="border-b border-[#e9eee9] pt-[33px] pb-[31px]"
    aria-labelledby="profile-heading"
  >
    <div class="mb-[23px] flex items-start gap-[13px]">
      <span
        class="grid size-[33px] shrink-0 place-items-center rounded-lg bg-[#e9f3eb] text-xs font-extrabold text-[#29704f]"
        >02</span
      >
      <div>
        <h3
          id="profile-heading"
          class="mt-0.5 mb-1 text-[17px] text-[#20372e]"
        >
          Experience and work
        </h3>
        <p class="m-0 text-xs text-[#89958e]">
          Show us what you have worked on
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-x-[18px] gap-y-5 min-[601px]:grid-cols-2">
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span
          >LinkedIn profile
          <small class="ml-1 font-normal text-[#9aa59e]">Optional</small></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.linkedin"
          data-cy="linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/..."
      /></label>
      <label
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d]"
        ><span
          >Portfolio / GitHub
          <small class="ml-1 font-normal text-[#9aa59e]">Optional</small></span
        ><input
          class="min-h-[45px] w-full rounded-lg border border-[#dce5dd] bg-white px-[13px] py-[11px] text-[13px] font-normal text-[#24352b] placeholder:text-[#a7b2aa] focus:border-[#5d9a73] focus:ring-[3px] focus:ring-[#5d9a731a] focus:outline-none"
          v-model.trim="form.portfolio"
          data-cy="portfolio"
          name="portfolio"
          type="url"
          placeholder="https://..."
      /></label>
      <div
        class="flex min-w-0 flex-col gap-[9px] text-xs font-bold text-[#34463d] min-[601px]:col-span-2"
      >
        <label for="resume"
          ><span>Upload your CV <b class="text-[#bc674d]">*</b></span></label
        ><label
          class="flex min-h-[128px] cursor-pointer flex-col items-center justify-center gap-[7px] rounded-[10px] border-[1.5px] border-dashed border-[#b9d1bd] bg-[#f9fcf9] text-center text-[#387a58] hover:bg-[#f1f8f2]"
          for="resume"
          ><UploadCloud :size="24" /><strong
            class="max-w-[95%] text-[13px] break-words"
            >{{ resume ? resume.name : 'Choose a CV file' }}</strong
          ><span class="text-[11px] font-normal text-[#94a39a]"
            >PDF, DOC or DOCX · Up to 5 MB</span
          ></label
        ><input
          id="resume"
          data-cy="resume"
          name="resume"
          class="sr-only"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          @change="emit('resume-change', $event)"
        />
        <p
          v-if="fileError"
          class="m-0 text-xs font-medium text-[#b84d43]"
          role="alert"
        >
          {{ fileError }}
        </p>
      </div>
    </div>
  </section>
</template>
