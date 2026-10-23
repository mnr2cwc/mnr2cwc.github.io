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
  </nav>
</template>

<style scoped>
  nav { flex-wrap: wrap; }
</style>
