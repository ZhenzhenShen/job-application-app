<script setup>
import { computed } from 'vue'
import { BriefcaseBusiness } from 'lucide-vue-next'

const props = defineProps({
  job: { type: Object, required: true },
  form: { type: Object, required: true },
  resume: { type: Object, default: null },
})
const emit = defineEmits(['edit'])
const workAuthorizationText = computed(
  () =>
    ({ yes: 'Yes', no: 'No', sponsorship: 'I would need visa sponsorship' })[
      props.form.workAuthorization
    ] || '—',
)
</script>

<template>
  <div data-cy="application-preview">
    <p
      class="flex items-center gap-[9px] text-[11px] font-extrabold tracking-[.18em] text-[#46856a]"
    >
      APPLICATION PREVIEW
    </p>
    <h2
      id="form-heading"
      class="mt-[11px] mb-2 text-[31px] tracking-[-.045em] text-[#182e28]"
    >
      Review your application
    </h2>
    <p class="m-0 text-[13px] leading-[1.7] text-[#637b69]">
      This is a read-only preview. Your details have not been sent to a company.
    </p>
    <div
      class="mt-[25px] mb-1.5 flex items-center gap-2.5 rounded-[10px] bg-[#eef5ef] p-4 text-[13px] font-bold text-[#2d6243]"
    >
      <BriefcaseBusiness :size="18" /><span
        >{{ job.title }} · Fernlight Studio</span
      >
    </div>

    <section
      aria-labelledby="preview-personal-heading"
      class="border-b border-[#e9eee9] py-[25px]"
    >
      <h3
        class="mb-[18px] text-[17px] text-[#213b2c]"
        id="preview-personal-heading"
      >
        Your details
      </h3>
      <dl class="m-0 grid grid-cols-1 gap-[19px] min-[601px]:grid-cols-2">
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            First name
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.firstName }}
          </dd>
        </div>
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">Last name</dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.lastName }}
          </dd>
        </div>
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Email address
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.email }}
          </dd>
        </div>
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Phone number
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.phone }}
          </dd>
        </div>
        <div class="min-[601px]:col-span-2">
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            City / region
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.location }}
          </dd>
        </div>
      </dl>
    </section>
    <section
      aria-labelledby="preview-experience-heading"
      class="border-b border-[#e9eee9] py-[25px]"
    >
      <h3
        class="mb-[18px] text-[17px] text-[#213b2c]"
        id="preview-experience-heading"
      >
        Experience and CV
      </h3>
      <dl class="m-0 grid grid-cols-1 gap-[19px] min-[601px]:grid-cols-2">
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            LinkedIn profile
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.linkedin || 'Not provided' }}
          </dd>
        </div>
        <div>
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Portfolio / GitHub
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.portfolio || 'Not provided' }}
          </dd>
        </div>
        <div class="min-[601px]:col-span-2">
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">CV</dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ resume?.name }}
          </dd>
        </div>
      </dl>
    </section>
    <section
      aria-labelledby="preview-final-heading"
      class="border-b border-[#e9eee9] py-[25px]"
    >
      <h3
        class="mb-[18px] text-[17px] text-[#213b2c]"
        id="preview-final-heading"
      >
        Final details
      </h3>
      <dl class="m-0 grid grid-cols-1 gap-[19px] min-[601px]:grid-cols-2">
        <div class="min-[601px]:col-span-2">
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Right to work in New Zealand
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ workAuthorizationText }}
          </dd>
        </div>
        <div class="min-[601px]:col-span-2">
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Cover letter
          </dt>
          <dd
            class="m-0 text-[13px] leading-[1.6] break-words whitespace-pre-wrap text-[#263a2c]"
          >
            {{ form.coverLetter }}
          </dd>
        </div>
        <div class="min-[601px]:col-span-2">
          <dt class="mb-1.5 text-[11px] font-bold text-[#88978b]">
            Recruitment consent
          </dt>
          <dd class="m-0 text-[13px] leading-[1.6] break-words text-[#263a2c]">
            {{ form.consent ? 'Confirmed' : 'Not confirmed' }}
          </dd>
        </div>
      </dl>
    </section>
    <button
      type="button"
      class="mt-[27px] inline-flex min-h-12 cursor-pointer items-center justify-center gap-[15px] rounded-lg border-0 bg-[#1d6445] px-[22px] text-[13px] font-bold text-white hover:bg-[#174c35]"
      @click="emit('edit')"
    >
      Back to application
    </button>
  </div>
</template>
