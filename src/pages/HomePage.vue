<template>
  <div>
    <section class="hero">
      <div class="hero-pattern"></div>
      <div class="hero-inner">
        <div class="hero-stamp">Group Adventure · Indonesia</div>
        <h1>The<br /><em>Gang Goes to </em><br />Indonesia</h1>
        <div class="image-container java1-img">
          <img src="/images/home1.jpg" />
        </div>

        <p class="hero-sub">
          Dragons, temples, volcanoes, and a whole lot of rice wine.<br />Our
          bucket-list trip is officially happening.
        </p>
        <div class="hero-details">
          <div class="hero-detail">
            <div class="num">9–14</div>
            <div class="label">Total Days</div>
          </div>
          <div class="hero-detail">
            <div class="num">3</div>
            <div class="label">Destinations</div>
          </div>
          <div class="hero-detail">
            <div class="num">$35</div>
            <div class="label">Avg / Night</div>
          </div>
          <div class="hero-detail">
            <div class="num">∞</div>
            <div class="label">Memories</div>
          </div>
          <div class="hero-detail">
            <div class="num">0?</div>
            <div class="label">Food Poisoning</div>
          </div>
        </div>
        <div class="hero-cards">
          <div class="dest-card" @click="navigate('komodo')">
            🦎 Komodo Island
          </div>
          <div class="dest-card" @click="navigate('bali')">🌺 Bali</div>
          <div class="dest-card" @click="navigate('java')">🌋 East Java</div>
        </div>
      </div>
    </section>

    <!-- ITINERARY STRIP -->
    <section class="itinerary-strip">
      <div class="itin-row">
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">Indianapolis</div>
          <div class="itin-days">Fly Out · 23-35 hrs</div>
        </div>
        <div class="itin-line"></div>
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">Bali (DPS)</div>
          <div class="itin-days">Arrive · Base Camp</div>
        </div>
        <div class="itin-line"></div>
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">Labuan Bajo</div>
          <div class="itin-days">Komodo · 2–3 nights</div>
        </div>
        <div class="itin-line"></div>
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">Bali</div>
          <div class="itin-days">Explore · 3–4 nights</div>
        </div>
        <div class="itin-line"></div>
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">East Java</div>
          <div class="itin-days">Volcanoes · 3–4 nights</div>
        </div>
        <div class="itin-line"></div>
        <div class="itin-stop">
          <div class="itin-dot"></div>
          <div class="itin-label">Fly Home</div>
          <div class="itin-days">Back to Indy</div>
        </div>
      </div>
    </section>

    <!-- MAP -->
    <section class="map-section">
      <div class="map-section-title">Where We're Going</div>
      <h2>The Route</h2>
      <div class="map-frame">
        <div class="map-svg-wrap">
          <svg
            viewBox="0 0 700 320"
            xmlns="http://www.w3.org/2000/svg"
            style="width: 100%; height: auto"
          >
            <!-- Ocean background -->
            <rect width="700" height="320" fill="#0D2B38" />
            <!-- Ocean texture lines -->
            <g stroke="#1B4F5A" stroke-width="0.5" opacity="0.4">
              <line x1="0" y1="40" x2="700" y2="40" />
              <line x1="0" y1="80" x2="700" y2="80" />
              <line x1="0" y1="120" x2="700" y2="120" />
              <line x1="0" y1="160" x2="700" y2="160" />
              <line x1="0" y1="200" x2="700" y2="200" />
              <line x1="0" y1="240" x2="700" y2="240" />
              <line x1="0" y1="280" x2="700" y2="280" />
            </g>

            <!-- JAVA ISLAND (large, left-center) -->
            <path
              d="M80,170 C100,155 140,148 190,150 C240,152 300,145 360,148 C400,150 430,155 450,165 C440,178 420,182 390,180 C350,178 300,175 260,178 C220,180 180,178 150,175 C120,172 90,180 80,170Z"
              fill="#3D7A5C"
              opacity="0.85"
            />
            <text
              x="265"
              y="168"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="11"
              text-anchor="middle"
              letter-spacing="2"
              opacity="0.9"
            >
              JAVA
            </text>

            <!-- EAST JAVA MARKER -->
            <circle cx="390" cy="162" r="6" fill="#E8714A" opacity="0.9" />
            <circle
              cx="390"
              cy="162"
              r="10"
              fill="none"
              stroke="#E8714A"
              stroke-width="1.5"
              opacity="0.5"
            />
            <text
              x="390"
              y="145"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="9"
              text-anchor="middle"
              letter-spacing="1"
            >
              EAST JAVA
            </text>
            <text
              x="390"
              y="135"
              fill="#E8714A"
              font-family="Special Elite, monospace"
              font-size="8"
              text-anchor="middle"
            >
              🌋 Bromo · Ijen
            </text>

            <!-- BALI ISLAND -->
            <path
              d="M470,158 C480,152 505,150 520,153 C530,156 525,165 515,168 C500,170 478,168 470,158Z"
              fill="#3D7A5C"
              opacity="0.85"
            />
            <text
              x="495"
              y="163"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="9"
              text-anchor="middle"
              letter-spacing="1"
            >
              BALI
            </text>

            <!-- BALI MARKER -->
            <circle cx="495" cy="155" r="6" fill="#C9A84C" opacity="0.9" />
            <circle
              cx="495"
              cy="155"
              r="10"
              fill="none"
              stroke="#C9A84C"
              stroke-width="1.5"
              opacity="0.5"
            />
            <text
              x="495"
              y="138"
              fill="#C9A84C"
              font-family="Special Elite, monospace"
              font-size="8"
              text-anchor="middle"
            >
              🌺 Temples · Rice
            </text>
            <text
              x="495"
              y="128"
              fill="#C9A84C"
              font-family="Special Elite, monospace"
              font-size="8"
              text-anchor="middle"
            >
              Terraces · Adventure
            </text>

            <!-- LOMBOK ISLAND -->
            <path
              d="M535,155 C543,150 555,150 562,155 C558,163 545,165 535,160 C533,158 533,157 535,155Z"
              fill="#3D7A5C"
              opacity="0.7"
            />

            <!-- SUMBAWA -->
            <path
              d="M575,152 C590,147 615,147 630,153 C628,162 612,165 595,163 C582,160 574,158 575,152Z"
              fill="#3D7A5C"
              opacity="0.7"
            />

            <!-- FLORES ISLAND -->
            <path
              d="M590,185 C610,178 640,175 665,178 C668,187 655,192 635,193 C610,193 593,192 590,185Z"
              fill="#3D7A5C"
              opacity="0.8"
            />
            <text
              x="630"
              y="188"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="9"
              text-anchor="middle"
              letter-spacing="1"
              opacity="0.8"
            >
              FLORES
            </text>

            <!-- KOMODO MARKER (between Sumbawa and Flores) -->
            <circle cx="580" cy="185" r="6" fill="#E8714A" opacity="0.9" />
            <circle
              cx="580"
              cy="185"
              r="10"
              fill="none"
              stroke="#E8714A"
              stroke-width="1.5"
              opacity="0.5"
            />
            <text
              x="580"
              y="208"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="9"
              text-anchor="middle"
              letter-spacing="1"
            >
              KOMODO
            </text>
            <text
              x="580"
              y="218"
              fill="#E8714A"
              font-family="Special Elite, monospace"
              font-size="8"
              text-anchor="middle"
            >
              🦎 Liveaboard
            </text>

            <!-- Labuan Bajo label -->
            <text
              x="580"
              y="168"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="7.5"
              text-anchor="middle"
              opacity="0.7"
            >
              Labuan Bajo
            </text>

            <!-- FLIGHT PATH INDY → BALI -->
            <path
              d="M30,30 Q200,60 495,155"
              stroke="#E8714A"
              stroke-width="1.5"
              fill="none"
              stroke-dasharray="5,4"
              opacity="0.5"
            />
            <circle cx="30" cy="30" r="4" fill="#E8714A" opacity="0.7" />
            <text
              x="30"
              y="20"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="8"
              text-anchor="middle"
              opacity="0.7"
            >
              IND
            </text>

            <!-- ROUTE LINE: Bali → Komodo → Bali → Java -->
            <path
              d="M495,155 Q540,170 580,185"
              stroke="#C9A84C"
              stroke-width="1.5"
              fill="none"
              stroke-dasharray="3,3"
              opacity="0.6"
            />
            <path
              d="M580,185 Q540,170 495,155"
              stroke="#C9A84C"
              stroke-width="1.5"
              fill="none"
              stroke-dasharray="3,3"
              opacity="0.6"
            />
            <path
              d="M495,155 Q445,158 390,162"
              stroke="#C9A84C"
              stroke-width="1.5"
              fill="none"
              stroke-dasharray="3,3"
              opacity="0.6"
            />

            <!-- LEGEND -->
            <rect
              x="10"
              y="270"
              width="200"
              height="42"
              fill="rgba(0,0,0,0.3)"
              rx="2"
            />
            <circle cx="25" cy="283" r="4" fill="#E8714A" />
            <text
              x="35"
              y="287"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="8"
            >
              Destination
            </text>
            <circle cx="25" cy="300" r="4" fill="#C9A84C" />
            <text
              x="35"
              y="304"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="8"
            >
              Base (Bali)
            </text>
            <line
              x1="110"
              y1="283"
              x2="130"
              y2="283"
              stroke="#E8714A"
              stroke-width="1.5"
              stroke-dasharray="4,3"
            />
            <text
              x="135"
              y="287"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="8"
            >
              Flight
            </text>
            <line
              x1="110"
              y1="300"
              x2="130"
              y2="300"
              stroke="#C9A84C"
              stroke-width="1.5"
              stroke-dasharray="3,3"
            />
            <text
              x="135"
              y="304"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="8"
            >
              Route
            </text>

            <!-- TITLE -->
            <text
              x="690"
              y="20"
              fill="#FAF6F0"
              font-family="Special Elite, monospace"
              font-size="9"
              text-anchor="end"
              opacity="0.5"
              letter-spacing="2"
            >
              INDONESIA · TRIP MAP
            </text>
          </svg>
        </div>
      </div>
    </section>

    <!-- Calendar -->
    <section style="background: var(--teal); padding: 4rem 2rem">
      <div style="max-width: 1000px; margin: 0 auto">
        <div class="section-eyebrow" style="color: #faf6f0">Save the Date</div>
        <h2 class="section-title" style="color: #faf6f0">
          May &ndash; June <em>2027</em>
        </h2>
        <table
          style="
            width: 100%;
            max-width: 560px;
            margin: 2rem auto 0;
            border-collapse: collapse;
            color: #faf6f0;
            font-family: &quot;Special Elite&quot;, monospace;
            text-align: center;
          "
        >
          <thead>
            <tr>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                SUN
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                MON
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                TUE
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                WED
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                THU
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                FRI
              </th>
              <th
                style="
                  padding: 0.75rem 0;
                  opacity: 0.6;
                  font-weight: normal;
                  letter-spacing: 2px;
                  border-bottom: 1px solid rgba(250, 246, 240, 0.25);
                "
              >
                SAT
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Week of May 16 -->
            <tr>
              <td style="padding: 0.9rem 0">16</td>
              <td style="padding: 0.9rem 0">17</td>
              <td style="padding: 0.9rem 0">18</td>
              <td style="padding: 0.9rem 0">19</td>
              <td style="padding: 0.9rem 0">20</td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                21
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                22
              </td>
            </tr>
            <!-- Week of May 23 -->
            <tr>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                23
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                24
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                25
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                26
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                27
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                28
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                29
              </td>
            </tr>
            <!-- Week of May 30 → June 5 -->
            <tr>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--coral);
                  color: #faf6f0;
                "
              >
                30
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: linear-gradient(
                    135deg,
                    var(--coral) 0%,
                    var(--coral) 50%,
                    var(--gold) 50%,
                    var(--gold) 100%
                  );
                  color: #faf6f0;
                "
              >
                31
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                <span
                  style="
                    display: block;
                    font-size: 0.55em;
                    letter-spacing: 1px;
                    opacity: 0.8;
                  "
                  >JUN</span
                >1
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                2
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                3
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                4
              </td>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                5
              </td>
            </tr>
            <!-- Week of June 6 -->
            <tr>
              <td
                style="
                  padding: 0.9rem 0;
                  background: var(--gold);
                  color: var(--teal);
                "
              >
                6
              </td>
              <td style="padding: 0.9rem 0">7</td>
              <td style="padding: 0.9rem 0">8</td>
              <td style="padding: 0.9rem 0">9</td>
              <td style="padding: 0.9rem 0">10</td>
              <td style="padding: 0.9rem 0">11</td>
              <td style="padding: 0.9rem 0">12</td>
            </tr>
          </tbody>
        </table>
        <div
          style="
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1.5rem;
            color: #faf6f0;
            font-family: &quot;Special Elite&quot;, monospace;
            font-size: 0.85rem;
          "
        >
          <div style="display: flex; align-items: center; gap: 0.5rem">
            <span
              style="
                width: 1rem;
                height: 1rem;
                background: var(--coral);
                display: inline-block;
                border-radius: 2px;
              "
            ></span>
            May 21 &ndash; 31
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem">
            <span
              style="
                width: 1rem;
                height: 1rem;
                background: var(--gold);
                display: inline-block;
                border-radius: 2px;
              "
            ></span>
            May 31 &ndash; June 6
          </div>
        </div>
      </div>
    </section>

    <!-- TIPS & LOGISTICS -->
    <section style="background: var(--cream); padding: 4rem 2rem">
      <div style="max-width: 1000px; margin: 0 auto">
        <div class="section-eyebrow">Before You Go</div>
        <h2 class="section-title">Trip <em>Essentials</em></h2>
        <div class="tips-grid" style="margin-top: 2rem">
          <div class="tip-card">
            <div class="tip-icon">✈️</div>
            <div class="tip-title">Getting There</div>
            <div class="tip-text">
              Fly from Indianapolis (IND) to Bali's Ngurah Rai Airport (DPS).
              Expect 23–35 hours with 1–2 layovers, typically through Tokyo,
              Singapore, or Seoul.
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-icon">🏠</div>
            <div class="tip-title">Where We Stay</div>
            <div class="tip-text">
              Private luxury villas & Airbnbs with pools — just
              $10–30/person/night in a big group. Bali has incredible villa
              options that rival 5-star hotels at a fraction of the cost.
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-icon">🚗</div>
            <div class="tip-title">Getting Around</div>
            <div class="tip-text">
              Rent private drivers throughout Bali and East Java. A full day
              with a driver runs around $35 USD and they often double as
              knowledgeable local guides.
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-icon">💰</div>
            <div class="tip-title">Budget Tips</div>
            <div class="tip-text">
              Eat at local warungs ($1–2/meal). Temple entrance fees are
              typically $3–6 USD. The more people in the group, the cheaper
              accommodation and drivers get per person.
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-icon">📋</div>
            <div class="tip-title">Visa & Entry</div>
            <div class="tip-text">
              Visa on Arrival costs $35 USD, valid for 30 days. Bali also
              requires a $10 tourist levy — pay online before arrival at
              lovebali.baliprov.go.id for convenience.
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-icon">🌡️</div>
            <div class="tip-title">Best Time to Go</div>
            <div class="tip-text">
              Dry season (May–October) is ideal. July–August is peak season;
              book villas 2–3 months ahead. Shoulder months like May or
              September offer great weather with fewer crowds.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div class="form-container">
    <h3>Submit Your Data</h3>
    <form @submit.prevent="handleSubmit">
      <input v-model="formData.username" placeholder="Username" required />
      <input
        v-model="formData.score"
        type="number"
        placeholder="Score"
        required
      />
      <button type="submit" :disabled="isSubmitting">Save to Backend</button>
    </form>
    <p v-if="statusMessage">{{ statusMessage }}</p>
  </div> -->
</template>

<script setup lang="ts">
  // import { ref } from "vue";
  import { navigate } from "../navigation";
  // import { createClient } from "@supabase/supabase-js";

  // 1. Initialize the Supabase client
  // Note: It is safe to expose these specific keys on GitHub Pages if RLS is enabled.
  // import.meta.env.VITE_SUPABASE_URL;
  // const supabaseUrl = "https://supabase.co";
  // const supabaseAnonKey = "your-anon-public-api-key";
  // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  // const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  // console.log(supabaseUrl);
  // console.log(supabaseAnonKey);
  // const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // // 2. Reactive state
  // const formData = ref({ username: "", score: 0 });
  // const isSubmitting = ref(false);
  // const statusMessage = ref("");

  // 3. Submit function
  // async function handleSubmit() {
  //   isSubmitting.value = true;
  //   statusMessage.value = "Saving...";

  //   try {
  //     // Insert data into your remote 'leaderboard' table
  //     const { error } = await supabase
  //       .from("leaderboard")
  //       .insert([
  //         { name: formData.value.username, points: formData.value.score },
  //       ]);

  //     if (error) throw error;

  //     statusMessage.value = "Data successfully saved to the cloud!";
  //     formData.value = { username: "", score: 0 }; // Reset form
  //   } catch (err) {
  //     statusMessage.value = `Error: ${err instanceof Error ? err.message : String(err)}`;
  //   } finally {
  //     isSubmitting.value = false;
  //   }
  // }
</script>
