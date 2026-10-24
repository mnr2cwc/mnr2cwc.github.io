<script setup lang="ts">
import { ref, watch } from 'vue'
import { currentPage } from './navigation'
import ProfilePage from './pages/ProfilePage.vue'
import FlightsPage from './pages/FlightsPage.vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomePage from './pages/HomePage.vue'
import KomodoPage from './pages/KomodoPage.vue'
import BaliPage from './pages/BaliPage.vue'
import BaliHousingPage from './pages/BaliHousingPage.vue'
import JavaPage from './pages/JavaPage.vue'
import AttendantsPage from './pages/AttendantsPage.vue'
import WelcomePage from './pages/WelcomePage.vue'
import { visitor, isNamedVisitor, authReady, initializeSession, leaveSession, sessionError } from './visitor'

initializeSession()

// Preserve the third-party flight widget's DOM and search state after first use.
const flightsVisited = ref(false)
watch(currentPage, (page) => {
  if (page === 'flights') flightsVisited.value = true
}, { immediate: true })
</script>

<template>
  <p v-if="!authReady" class="visitor-bar" role="status">Restoring your session…</p>
  <WelcomePage v-else-if="!visitor" />
  <template v-else>
  <NavBar />
  <div class="visitor-bar">
    <span>{{ visitor.name === 'Guest' && !visitor.id ? 'Browsing as a guest' : `Welcome, ${visitor.name}` }}</span>
    <button @click="leaveSession">{{ isNamedVisitor ? 'Sign out' : 'Sign in' }}</button>
    <p v-if="sessionError" role="alert">{{ sessionError }}</p>
  </div>

  <HomePage v-if="currentPage === 'home' || (currentPage === 'profile' && !isNamedVisitor)" />
  <KomodoPage v-else-if="currentPage === 'komodo'" />
  <BaliPage v-else-if="currentPage === 'bali'" />
  <BaliHousingPage v-else-if="currentPage === 'bali-housing'" />
  <JavaPage v-else-if="currentPage === 'java'" />
  <AttendantsPage v-else-if="currentPage === 'people'" />
  <ProfilePage v-else-if="currentPage === 'profile' && isNamedVisitor" />
  </template>
  <div v-if="flightsVisited" v-show="visitor && authReady && currentPage === 'flights'">
    <FlightsPage />
  </div>
  <SiteFooter v-if="visitor && authReady" />
</template>

<style scoped>
.visitor-bar { display: flex; justify-content: flex-end; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 0.65rem 1.25rem; font-size: 0.8rem; color: var(--teal); }
.visitor-bar button { background: transparent; border: 0; color: inherit; font: inherit; text-decoration: underline; cursor: pointer; }
</style>
