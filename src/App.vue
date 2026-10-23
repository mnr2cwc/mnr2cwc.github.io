<script setup lang="ts">
import { currentPage } from './navigation'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomePage from './pages/HomePage.vue'
import KomodoPage from './pages/KomodoPage.vue'
import BaliPage from './pages/BaliPage.vue'
import BaliHousingPage from './pages/BaliHousingPage.vue'
import JavaPage from './pages/JavaPage.vue'
import PeoplePage from './pages/PeoplePage.vue'
import WelcomePage from './pages/WelcomePage.vue'
import { visitor, isNamedVisitor } from './visitor'
</script>

<template>
  <WelcomePage v-if="!visitor" />
  <template v-else>
  <NavBar />
  <div class="visitor-bar">
    <span>{{ visitor.name === 'Guest' && !visitor.id ? 'Browsing as a guest' : `Welcome, ${visitor.name}` }}</span>
    <button @click="visitor = null">Switch person</button>
  </div>

  <HomePage v-if="currentPage === 'home' || (currentPage === 'people' && !isNamedVisitor)" />
  <KomodoPage v-else-if="currentPage === 'komodo'" />
  <BaliPage v-else-if="currentPage === 'bali'" />
  <BaliHousingPage v-else-if="currentPage === 'bali-housing'" />
  <JavaPage v-else-if="currentPage === 'java'" />
  <PeoplePage v-else-if="currentPage === 'people' && isNamedVisitor" />

  <SiteFooter />
  </template>
</template>

<style scoped>
.visitor-bar { display: flex; justify-content: flex-end; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 0.65rem 1.25rem; font-size: 0.8rem; color: var(--teal); }
.visitor-bar button { background: transparent; border: 0; color: inherit; font: inherit; text-decoration: underline; cursor: pointer; }
</style>
