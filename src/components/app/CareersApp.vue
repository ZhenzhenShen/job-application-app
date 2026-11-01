<script setup>
import SiteHeader from '../layout/SiteHeader.vue'
import SiteFooter from '../layout/SiteFooter.vue'
import CareersHomePage from '../pages/CareersHomePage.vue'
import OpenRolesPage from '../pages/OpenRolesPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import AboutCompanyPage from '../pages/AboutCompanyPage.vue'
import HiringProcessPage from '../pages/HiringProcessPage.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import JobApplicationPage from '../pages/application/JobApplicationPage.vue'
import JobApplicationTrackerPage from '../pages/tracker/JobApplicationTrackerPage.vue'
import { useHashRoute } from '../../composables/useHashRoute'

const { page, selectedJob } = useHashRoute()
</script>

<template>
  <div class="min-h-screen bg-[#f7f8f5] font-sans text-[#203126]">
    <SiteHeader :current-page="page" />
    <CareersHomePage v-if="page === 'home'" />
    <OpenRolesPage v-else-if="page === 'careers'" />
    <JobDetailsPage
      v-else-if="page === 'jobs' && selectedJob"
      :selected-job="selectedJob"
    />
    <AboutCompanyPage v-else-if="page === 'about'" />
    <HiringProcessPage v-else-if="page === 'process'" />
    <JobApplicationPage
      v-else-if="page === 'apply' && selectedJob"
      :key="selectedJob.slug"
      :job="selectedJob"
    />
    <JobApplicationTrackerPage v-else-if="page === 'tracker'" />
    <PageNotFound v-else />
    <SiteFooter />
  </div>
</template>
