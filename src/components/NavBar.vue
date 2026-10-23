<script setup lang="ts">
  import { computed } from "vue";
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
      class="people-button"
      type="button"
      aria-label="View people going"
      title="People going"
      :aria-current="currentPage === 'people' ? 'page' : undefined"
      @click="navigate('people')"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-3-5.2" />
      </svg>
    </button>
  </nav>
</template>

<style scoped>
  nav { padding-right: 3.5rem; }

  .people-button {
    position: absolute;
    right: 0.5rem;
    top: 0.35rem;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--sand);
    opacity: 0.25;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .people-button:hover,
  .people-button:focus-visible,
  .people-button[aria-current="page"] { opacity: 1; }

  .people-button:focus-visible { outline: 2px solid var(--gold); }
</style>
