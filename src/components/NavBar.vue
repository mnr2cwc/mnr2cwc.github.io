<script setup lang="ts">
  import { computed } from "vue";
  import { isNamedVisitor } from "../visitor";
  import { currentPage, navigate } from "../navigation";

  // bali-housing is a sub-page of Bali, so the Bali tab stays highlighted there.
  const baliActive = computed(
    () => currentPage.value === "bali" || currentPage.value === "bali-housing",
  );
</script>

<template>
  <nav>
    <div class="nav-logo">🌴 Indonesia Trip</div>
    <button
      class="nav-btn"
      :class="{ active: currentPage === 'home' }"
      @click="navigate('home')"
    >
      Overview
    </button>
    <button
      class="nav-btn"
      :class="{ active: currentPage === 'komodo' }"
      @click="navigate('komodo')"
    >
      Komodo
    </button>
    <button
      class="nav-btn"
      :class="{ active: baliActive }"
      @click="navigate('bali')"
    >
      Bali
    </button>
    <button
      class="nav-btn"
      :class="{ active: currentPage === 'java' }"
      @click="navigate('java')"
    >
      East Java
    </button>
    <button
      v-if="isNamedVisitor"
      class="nav-btn"
      :class="{ active: currentPage === 'people' }"
      :aria-current="currentPage === 'people' ? 'page' : undefined"
      @click="navigate('people')"
    >
      attendants
    </button>
    <button
      v-if="isNamedVisitor"
      class="nav-btn nav-profile"
      :class="{ active: currentPage === 'profile' }"
      :aria-current="currentPage === 'profile' ? 'page' : undefined"
      @click="navigate('profile')"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="9" r="3" />
        <path d="M5 19a7 7 0 0 1 14 0" />
      </svg>
      Profile
    </button>
  </nav>
</template>

<style scoped>
  nav { flex-wrap: wrap; }
  .nav-profile { margin-left: auto; display: inline-flex; align-items: center; gap: 0.5rem; }
</style>
