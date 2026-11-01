<script setup>
import { computed, reactive, ref } from 'vue'
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Paperclip,
  ShieldCheck,
} from 'lucide-vue-next'
import ApplicationPreview from './ApplicationPreview.vue'
import PersonalDetailsStep from './steps/PersonalDetailsStep.vue'
import ExperienceAndCvStep from './steps/ExperienceAndCvStep.vue'
import FinalDetailsStep from './steps/FinalDetailsStep.vue'
import {
  getFinalDetailsError,
  getPersonalDetailsError,
  getResumeError,
} from '../../../utils/applicationValidation.js'

const props = defineProps({
  job: { type: Object, required: true },
  endpoint: {
    type: String,
    default: () => import.meta.env.VITE_APPLICATION_ENDPOINT?.trim() || '',
  },
})
const endpoint = props.endpoint.trim()
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  portfolio: '',
  workAuthorization: '',
  coverLetter: '',
  consent: false,
})
const resume = ref(null)
const fileError = ref('')
const fieldError = ref('')
const submitError = ref('')
const sending = ref(false)
const completed = ref(false)
const step = ref(1)
const formElement = ref(null)
const stepLabels = ['Your details', 'Experience and CV', 'Final details']
const fullName = computed(() =>
  `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
)
function chooseResume(event) {
  const file = event.target.files?.[0] || null
  fileError.value = file ? getResumeError(file) : ''
  resume.value = fileError.value ? null : file
}

function nextStep() {
  fieldError.value = ''
  for (const input of formElement.value.querySelectorAll(
    'input, select, textarea',
  )) {
    if (!input.reportValidity()) return
  }
  if (step.value === 1 && getPersonalDetailsError(form)) {
    fieldError.value = getPersonalDetailsError(form)
    return
  }
  if (step.value === 2 && !resume.value) {
    fileError.value = fileError.value || getResumeError(resume.value)
    return
  }
  step.value++
}

function previousStep() {
  fieldError.value = ''
  submitError.value = ''
  step.value--
}

async function submit() {
  submitError.value = ''
  fieldError.value = ''
  if (step.value !== 3) return
  if (getFinalDetailsError(form)) {
    fieldError.value = getFinalDetailsError(form)
    return
  }
  if (!resume.value) {
    fileError.value = fileError.value || getResumeError(resume.value)
    return
  }
  if (!endpoint) {
    completed.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const payload = new FormData()
  Object.entries(form).forEach(([key, value]) =>
    payload.append(key, String(value)),
  )
  payload.append('position', props.job.title)
  payload.append('resume', resume.value)
  sending.value = true
  try {
    const response = await fetch(endpoint, { method: 'POST', body: payload })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    completed.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch {
    submitError.value =
      'We could not submit your application. Please try again. Your details are still on this page.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <main
    id="top"
    data-cy="job-application-page"
    class="mx-auto grid w-[calc(100%-28px)] max-w-[1240px] grid-cols-1 items-start gap-8 pt-[30px] pb-[42px] min-[901px]:grid-cols-[minmax(310px,.82fr)_minmax(0,1.18fr)] min-[901px]:gap-[clamp(32px,5vw,80px)] min-[901px]:pt-[60px] min-[901px]:pb-[76px] sm:w-[calc(100%-56px)]"
  >
    <aside
      class="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[22px] bg-[#194735] px-[26px] py-[30px] text-white shadow-xl min-[601px]:p-[37px] min-[901px]:sticky min-[901px]:top-[30px] min-[901px]:min-h-[700px] min-[901px]:px-[42px] min-[901px]:pt-[46px] min-[901px]:pb-[34px]"
      aria-labelledby="job-title"
    >
      <div class="relative z-[1]">
        <span
          class="flex items-center gap-[9px] text-[11px] font-extrabold tracking-[.18em] text-[#b9d2b6]"
          ><span class="h-px w-5 bg-current"></span> OPEN POSITION</span
        >
        <h1
          id="job-title"
          class="mt-[25px] mb-[18px] text-[35px] leading-[1.25] tracking-[-.06em] min-[901px]:mt-[42px] min-[901px]:text-[clamp(35px,3.5vw,52px)]"
        >
          Make room for<br /><em class="text-[#d6c39c] not-italic"
            >what's next.</em
          >
        </h1>
        <p class="max-w-[350px] text-[15px] leading-[1.9] text-[#d0dfd4]">
          We are looking for curious people who care about the details and enjoy
          working with others. Tell us about yourself.
        </p>
        <div
          class="mt-[25px] rounded-2xl border border-white/20 bg-white/10 p-[25px] min-[901px]:mt-12"
        >
          <span class="text-[11px] font-bold tracking-[.12em] text-[#bfd4c2]"
            >ROLE YOU ARE APPLYING FOR</span
          >
          <h2
            data-cy="applying-role"
            class="my-[12px] text-[23px]"
          >
            {{ job.title }}
          </h2>
          <div
            class="flex flex-wrap gap-x-[19px] gap-y-[14px] text-xs text-[#e5ede5]"
          >
            <span class="flex items-center gap-2"
              ><MapPin :size="16" /> {{ job.location }}</span
            ><span class="flex items-center gap-2"
              ><Clock3 :size="16" /> {{ job.type }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="relative z-[1] mt-[35px] flex items-start gap-2 border-t border-white/20 pt-[25px] text-xs leading-[1.7] text-[#c8d9ca] min-[901px]:mt-0"
      >
        <ShieldCheck
          :size="20"
          class="shrink-0"
        />
        <p class="m-0">
          Your details are used only for this recruitment process. Fernlight
          Studio is a fictional company used for this demo.
        </p>
      </div>
    </aside>

    <section
      class="rounded-[22px] border border-[#e9eee9] bg-white px-[22px] py-[29px] shadow-[0_12px_50px_#253c2d0b] min-[601px]:px-[clamp(27px,4vw,55px)] min-[601px]:pt-[38px] min-[601px]:pb-[43px]"
      aria-labelledby="form-heading"
    >
      <div
        v-if="completed && endpoint"
        class="flex min-h-[500px] flex-col items-start justify-center"
        role="status"
      >
        <span
          class="mb-7 grid size-[72px] place-items-center rounded-full bg-[#e4f3e8] text-[#24734f]"
          ><CheckCircle2 :size="36"
        /></span>
        <p
          class="flex items-center gap-[9px] text-[11px] font-extrabold tracking-[.18em] text-[#46856a]"
        >
          APPLICATION SENT
        </p>
        <h2
          id="form-heading"
          class="mt-2.5 mb-2 text-[34px] tracking-[-.05em] text-[#182e28]"
        >
          Application submitted
        </h2>
        <p class="m-0 text-sm leading-[1.7] text-[#7d8980]">
          {{ fullName }}, thank you for applying. The hiring team will contact
          you using the email address you provided.
        </p>
        <div
          class="my-[30px] flex w-full items-center gap-2 rounded-[10px] border border-[#e1eae1] p-[18px] text-[13px] text-[#3c5645]"
        >
          <BriefcaseBusiness :size="18" /><span
            >{{ job.title }} · Fernlight Studio</span
          >
        </div>
      </div>

      <ApplicationPreview
        v-else-if="completed"
        :job="job"
        :form="form"
        :resume="resume"
        @edit="completed = false"
      />

      <template v-else>
        <div>
          <p
            class="flex items-center gap-[9px] text-[11px] font-extrabold tracking-[.18em] text-[#46856a]"
          >
            YOUR NEXT CHAPTER
          </p>
          <h2
            id="form-heading"
            class="mt-2.5 mb-2 text-[34px] tracking-[-.05em] text-[#182e28]"
          >
            Apply for this role
          </h2>
          <p class="m-0 text-sm leading-[1.7] text-[#7d8980]">
            We are glad you are here. This application should take about five
            minutes.
          </p>
        </div>
        <div
          v-if="!endpoint"
          class="mt-[25px] flex items-center gap-[9px] rounded-lg border border-[#dceadd] bg-[#f0f8f1] px-[14px] py-3 text-xs text-[#426b50]"
          role="note"
        >
          <FileText
            :size="18"
            class="shrink-0"
          /><span
            >Demo mode: you can preview your application, but no receiving
            service is connected.</span
          >
        </div>
        <ol
          data-cy="application-progress"
          class="mt-7 mb-0.5 grid list-none grid-cols-3 gap-1 p-0 min-[601px]:gap-2.5"
          aria-label="Application progress"
        >
          <li
            class="flex flex-col items-start gap-1 border-b-2 px-[7px] py-[11px] min-[601px]:flex-row min-[601px]:items-center min-[601px]:gap-[9px]"
            v-for="(label, index) in stepLabels"
            :key="label"
            :class="
              step === index + 1
                ? 'border-[#28734f] text-[#236a48]'
                : step > index + 1
                  ? 'border-[#91b79c] text-[#547b60]'
                  : 'border-[#e5ece6] text-[#9ba89d]'
            "
            :aria-current="step === index + 1 ? 'step' : undefined"
          >
            <span class="text-[11px] font-extrabold">{{
              String(index + 1).padStart(2, '0')
            }}</span
            ><small class="text-[10px] font-bold min-[601px]:text-[11px]">{{
              label
            }}</small>
          </li>
        </ol>
        <form
          data-cy="application-form"
          ref="formElement"
          @submit.prevent="submit"
        >
          <PersonalDetailsStep
            v-if="step === 1"
            :form="form"
          />

          <ExperienceAndCvStep
            v-if="step === 2"
            :form="form"
            :resume="resume"
            :file-error="fileError"
            @resume-change="chooseResume"
          />

          <FinalDetailsStep
            v-if="step === 3"
            :form="form"
          />

          <p
            v-if="fieldError"
            class="mb-4 text-xs font-medium text-[#b84d43]"
            role="alert"
          >
            {{ fieldError }}
          </p>
          <template v-if="step === 3">
            <p
              v-if="submitError"
              class="mb-4 text-xs font-medium text-[#b84d43]"
              role="alert"
            >
              {{ submitError }}
            </p>
          </template>
          <div class="mt-[25px] flex justify-between gap-3">
            <button
              v-if="step > 1"
              data-cy="previous-step"
              type="button"
              class="inline-flex min-h-[45px] cursor-pointer items-center justify-center gap-[11px] rounded-lg border border-[#d7e4d9] bg-white px-[18px] text-[13px] font-bold text-[#2a6949] hover:bg-[#f1f7f2]"
              @click="previousStep"
            >
              <ArrowLeft :size="18" /> Previous</button
            ><button
              v-if="step < 3"
              data-cy="next-step"
              type="button"
              class="ml-auto inline-flex min-h-[45px] cursor-pointer items-center justify-center gap-[11px] rounded-lg border-0 bg-[#1d6445] px-[18px] text-[13px] font-bold text-white hover:bg-[#174c35]"
              @click="nextStep"
            >
              Next <ArrowRight :size="18" />
            </button>
          </div>
          <div
            v-if="step === 3"
            class="mt-6 flex flex-col items-stretch justify-between gap-[15px] border-t border-[#e9eee9] pt-[21px] min-[601px]:flex-row min-[601px]:items-center"
          >
            <span class="flex items-center gap-2 text-[11px] text-[#9aa69d]"
              ><Paperclip :size="15" /> Check your details before
              continuing</span
            ><button
              data-cy="submit-application"
              class="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-[15px] rounded-lg border-0 bg-[#1d6445] px-[22px] text-[13px] font-bold text-white hover:bg-[#174c35] disabled:cursor-wait disabled:opacity-60 min-[601px]:w-auto"
              type="submit"
              :disabled="sending"
            >
              {{
                sending
                  ? 'Submitting...'
                  : endpoint
                    ? 'Submit application'
                    : 'Preview application'
              }}
            </button>
          </div>
        </form>
      </template>
    </section>
  </main>
</template>
