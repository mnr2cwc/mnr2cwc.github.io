// import { createClient } from "@supabase/supabase-js/dist/index.cjs";
import { ref } from "vue";
// import { createClient } from "@supabase/supabase-js";

// ─────────────────────────────────────────────────────────────────────────
// Client-side auth state. NOTE: this only gates the UI — it is NOT real
// security. The whole app ships to the browser, so anyone determined can
// bypass a client-only check. If the trip details must stay private, the real
// gate has to live on a server/auth provider. This is fine for a soft "members
// only" wall on a public GitHub Pages site.
// ─────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = "indo-trip-auth";

var user: null | string = null;

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function handleSubmit(
  username: string,
  isSubmitting: any,
  statusMessage: any,
  formData: any,
  supabase: any,
) {
  isSubmitting.value = true;
  statusMessage.value = "Saving...";

  try {
    // Insert data into your remote 'leaderboard' table
    const { error } = await supabase
      .from("leaderboard")
      .insert([{ name: username, points: 0 }]);

    if (error) throw error;

    statusMessage.value = "Data successfully saved to the cloud!";
    formData.value = { username: "", score: 0 }; // Reset form
  } catch (err) {
    statusMessage.value = `Error: ${err instanceof Error ? err.message : String(err)}`;
  } finally {
    isSubmitting.value = false;
  }
}
// Restore the session on reload so a refresh doesn't kick the user out.
export const isAuthenticated = ref<boolean>(
  sessionStorage.getItem(STORAGE_KEY) === "true",
);

export function get_user(): string | null {
  return user;
}
/**
 * Verify credentials. ⬅️ REPLACE THIS with your real login logic.
 *
 * Whatever you plug in (a hardcoded shared password, a fetch to an auth
 * endpoint, a provider SDK, etc.), just resolve to `true` on success and
 * `false` on failure — the rest of the flow already handles both.
 *
 * The placeholder below accepts any non-empty username + password so you can
 * see the gating work end-to-end. It is intentionally NOT secure.
 */
// export async function verifyCredentials(
//   username: string,
//   password: string,
// ): Promise<boolean> {
//   // TODO: implement real authentication here.
//   return username.trim().length > 0 && password.length > 0;
// }
async function get_users(supabase: any): Promise<any[] | null> {
  const { data, error } = await supabase.from("leaderboard").select("*");
  if (error) {
    console.error("Error fetching users:", error);
  } else {
    console.log("Users:", data);
  }
  // console.log(data);
  return data;
}
export async function verifyCredentials(
  username: string,
  isSubmitting: any,
  statusMessage: any,
  formData: any,
  supabase: any,
): Promise<boolean> {
  // need to check if this data exists in the supabase database, if it does then return true, else return false
  let users = await get_users(supabase);
  // console.log("USers : ");
  // console.log(users);
  // console.log("Username : ");
  // console.log(username);
  if (typeof username == "string") {
    handleSubmit(username, isSubmitting, statusMessage, formData, supabase);
    user = username;
  } else {
    const hasMatch = users?.some((user) => user.id === username.id);
    // console.log(hasMatch);
    if (!hasMatch) {
      // console.log;
      return false;
    }
    user = username.name;
  }

  // TODO: implement real authentication here.

  return true;
  // return username.trim().length > 0;
}

// export async function login(username: string, password: string): Promise<boolean> {
//   const ok = await verifyCredentials(username, password)
//   if (ok) {
//     isAuthenticated.value = true
//     sessionStorage.setItem(STORAGE_KEY, 'true')
//   }
//   return ok
// }

export async function login(
  username: string,
  isSubmitting: any,
  statusMessage: any,
  formData: any,
  supabase: any,
): Promise<boolean> {
  const ok = await verifyCredentials(
    username,
    isSubmitting,
    statusMessage,
    formData,
    supabase,
  );
  if (ok) {
    isAuthenticated.value = true;
    sessionStorage.setItem(STORAGE_KEY, "true");
  }
  return ok;
}

export function logout(): void {
  isAuthenticated.value = false;
  sessionStorage.removeItem(STORAGE_KEY);
}
