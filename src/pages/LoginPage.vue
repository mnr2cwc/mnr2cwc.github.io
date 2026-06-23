<script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { login } from "../auth";
  import { createClient } from "@supabase/supabase-js";
  const username = ref("");
  // const password = ref("");
  const error = ref("");
  const submitting = ref(false);

  const formData = ref({ username: "", score: 0 });
  // const isSubmitting = ref(false);
  const statusMessage = ref("");

  const users = ref<any[]>([]);

  const participants = ref([
    {
      id: 5,
      created_at: "2026-06-23T18:27:04.702585+00:00",
      name: "Michael",
      points: 1,
    },
  ]);

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  async function get_users(): Promise<any[] | null> {
    const { data, error } = await supabase.from("leaderboard").select("*");
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      console.log("Users:", data);
    }
    // console.log(data);
    return data;
  }

  const selectedItem = ref<any>(null);
  onMounted(async () => {
    // Fall back to the hardcoded participants if Supabase returns nothing.
    users.value = (await get_users()) ?? participants.value;
  });
  // users.value = await get_users();
  // console.log(users);

  async function onSubmit() {
    error.value = "";
    submitting.value = true;
    try {
      if (typeof username.value == "string") {
        username.value = username.value;
      } else if (selectedItem.value) {
        username.value = selectedItem.value;
      }
      console.log("USers : ");
      console.log(users.value);
      console.log("user : ");
      console.log(username.value);
      const ok = await login(
        username.value,
        submitting,
        statusMessage,
        formData,
        supabase,
      );

      // const ok = await login(username.value, password.value)
      if (!ok) {
        error.value = "Incorrect username or password.";
      }
      // On success, App.vue reacts to isAuthenticated and swaps in the site.
    } catch (e) {
      error.value = "Something went wrong. Please try again.";
    } finally {
      submitting.value = false;
    }
  }

  function test() {
    console.log("USers : ");
    console.log(users.value);
    console.log("user : ");
    console.log(username.value);
  }
  // Selecting a person from the dropdown fills in the username used for login.
  watch(selectedItem, (person) => {
    if (person) username.value = person.name;
  });
</script>

<template>
  <div class="login-screen">
    <div class="login-pattern"></div>
    <div class="login-card">
      <div class="hero-stamp">Members Only · Indonesia</div>
      <h1 class="login-title">The Gang Goes to <em>Indonesia</em></h1>
      <p class="login-sub">Sign in to view the trip plans.</p>

      <form class="login-form" @submit.prevent="onSubmit">
        <label class="login-label">
          Username
          <input
            v-model="username"
            type="text"
            autocomplete="username"
            class="login-input"
            required
          />
        </label>

        <label class="login-label">
          Person
          <select class="login-input login-select" v-model="selectedItem">
            <option :value="null" disabled>Select Person</option>
            <option v-for="person in users" :key="person.id" :value="person">
              {{ person.name }}
            </option>
          </select>
        </label>

        <p v-if="error" class="login-error">{{ error }}</p>

        <button
          type="submit"
          class="booking-cta login-btn"
          :disabled="submitting"
        >
          {{ submitting ? "Signing in…" : "→ Enter" }}
        </button>
      </form>
      <button @click="test">ACTION</button>
      <p v-if="statusMessage">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
  .login-screen {
    min-height: 100vh;
    background: var(--teal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .login-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.06;
    background-image:
      repeating-linear-gradient(
        45deg,
        var(--sand) 0,
        var(--sand) 1px,
        transparent 0,
        transparent 50%
      ),
      repeating-linear-gradient(
        -45deg,
        var(--sand) 0,
        var(--sand) 1px,
        transparent 0,
        transparent 50%
      );
    background-size: 20px 20px;
  }

  .login-card {
    position: relative;
    background: var(--cream);
    border: 1px solid rgba(44, 36, 22, 0.12);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    padding: 2.5rem 2.2rem;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .login-title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.05;
    color: var(--teal);
    margin: 0.8rem 0 0.4rem;
  }

  .login-title em {
    font-style: italic;
    color: var(--coral);
  }

  .login-sub {
    font-style: italic;
    color: var(--muted);
    margin-bottom: 1.8rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
  }

  .login-label {
    font-family: "Special Elite", monospace;
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .login-input {
    font-family: "Lora", serif;
    font-size: 1rem;
    color: var(--ink);
    background: white;
    border: 1px solid rgba(44, 36, 22, 0.25);
    padding: 0.65rem 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .login-input:focus {
    border-color: var(--coral);
  }

  .login-error {
    color: var(--stamp-red);
    font-size: 0.85rem;
    margin: -0.2rem 0 0;
  }

  .login-btn {
    margin-top: 0.6rem;
    text-align: center;
  }

  .login-btn:disabled {
    opacity: 0.6;
    cursor: default;
  }
</style>
