<script setup lang="ts">
import { currentPage } from './navigation'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomePage from './pages/HomePage.vue'
import KomodoPage from './pages/KomodoPage.vue'
import BaliPage from './pages/BaliPage.vue'
import BaliHousingPage from './pages/BaliHousingPage.vue'
import JavaPage from './pages/JavaPage.vue'
</script>

<template>
  <NavBar />

  <HomePage v-if="currentPage === 'home'" />
  <KomodoPage v-else-if="currentPage === 'komodo'" />
  <BaliPage v-else-if="currentPage === 'bali'" />
  <BaliHousingPage v-else-if="currentPage === 'bali-housing'" />
  <JavaPage v-else-if="currentPage === 'java'" />

  <SiteFooter />
</template>
