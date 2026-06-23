<script setup lang="ts">
import { navigate } from '../navigation'
</script>

<template>
  <div>
    <div class="bali-hero">
      <div class="dest-hero-inner">
        <div class="dest-hero-top">
          <div class="dest-hero-text">
            <div class="dest-page-stamp">Stop 02 · Island of the Gods</div>
            <h1 class="dest-h1">
              Bali<em>Untamed</em>
              <div class="image-container">
                <img src="/images/bali1.jpg" />
              </div>
            </h1>
            <p class="dest-tagline">Rice terraces, sea temples, jungle swings, and the best $2 meal you'll ever eat. The relaxing (and occasionally adrenaline-fueled) heart of our trip.</p>
            <div class="dest-stats">
              <div class="dest-stat">
                <div class="s-num">3–4</div>
                <div class="s-label">Nights</div>
              </div>
              <div class="dest-stat">
                <div class="s-num">$10–30</div>
                <div class="s-label">Villa / Person / Night</div>
              </div>
              <div class="dest-stat">
                <div class="s-num">$35</div>
                <div class="s-label">Driver / Full Day</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="tape">Activities · Culture · Adventure</div>

      <p class="section-intro">Bali is our home base and relaxation zone — but there's nothing passive about it. Between ancient temples, jungle ATVs, sacred springs, and epic sunsets, every day here earns its place.</p>

      <div class="section-eyebrow">Day by Day</div>
      <h2 class="section-title">Sample <em>Itinerary</em></h2>

      <div class="day-list">
        <div class="day-row">
          <div class="day-num">1</div>
          <div class="day-content">
            <div class="day-title">Arrive & Settle In Ubud</div>
            <div class="day-desc">Check into your villa in Ubud — the cultural heart of Bali. Evening walk through the Ubud Art Market. Dinner at a warung (local Indonesian diner) for around $2–5 USD. Early night — jet lag is real after 30+ hours of travel.</div>
          </div>
        </div>
        <div class="day-row">
          <div class="day-num">2</div>
          <div class="day-content">
            <div class="day-title">Ubud Cultural Day — Temples, Terraces & Monkeys</div>
            <div class="day-desc">Start early at Tegallalang Rice Terraces before the tour buses arrive. Visit Sacred Monkey Forest Sanctuary (hold your sunglasses). Afternoon: Tirta Empul Holy Spring Temple for a traditional purification ceremony. Sunset at Tanah Lot Sea Temple. Private driver all day — ~$35.</div>
          </div>
        </div>
        <div class="day-row">
          <div class="day-num">3</div>
          <div class="day-content">
            <div class="day-title">Adventure Day — ATV & Whitewater Rafting</div>
            <div class="day-desc">Morning ATV quad bike ride through rice paddies, jungle tunnels, and muddy rivers. Afternoon: whitewater rafting down the Ayung River through tropical rainforest, past stone carvings and hidden waterfalls. Buffet lunch included. Full-day combo package ~$60/person.</div>
          </div>
        </div>
        <div class="day-row">
          <div class="day-num">4</div>
          <div class="day-content">
            <div class="day-title">Mt. Batur Sunrise Hike (Optional) or Beach Day</div>
            <div class="day-desc">For the early risers: pre-dawn drive to Mt. Batur for a 2-hour guided sunrise hike to the volcano rim. Back by 11am. OR: beach day in Seminyak or Nusa Penida snorkel trip. Evening: Uluwatu Temple sunset + Kecak fire dance show for the ultimate Bali finale.</div>
          </div>
        </div>
      </div>

      <hr class="dashed-divider" />

      <div class="section-eyebrow">Top Activities with Prices</div>
      <h2 class="section-title">Things to <em>Do</em></h2>

      <div class="activities-grid">
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--jungle);"></div>
          <div class="card-body">
            <div class="card-tag">Culture · Temples</div>
            <div class="card-name">Ubud Cultural Full-Day Tour</div>
            <div class="card-desc">Private driver takes you to Tegallalang Rice Terraces, Sacred Monkey Forest, Tirta Empul Holy Spring, and Tanah Lot Sea Temple. A Balinese dress is often included for photos at the temple. One of the best ways to see Bali with a first-time group.</div>
            <div class="card-footer">
              <span class="card-price">$45–$80/person</span>
              <span class="card-duration">Full Day</span>
            </div>
          </div>
        </div>
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--coral);"></div>
          <div class="card-body">
            <div class="card-tag">Adventure · Outdoors</div>
            <div class="card-name">ATV Quad Bike + Rafting Combo</div>
            <div class="card-desc">1.5 hrs of off-road ATV through rice paddies, jungle tunnels, and river crossings. Then 2 hrs rafting the 12-km Ayung River with Class II–III rapids. Hotel transfers and buffet lunch included. Epic group activity — great for laughs and photos.</div>
            <div class="card-footer">
              <span class="card-price">~$55–$65/person</span>
              <span class="card-duration">Full Day</span>
            </div>
          </div>
        </div>
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--teal);"></div>
          <div class="card-body">
            <div class="card-tag">Hiking · Volcano</div>
            <div class="card-name">Mt. Batur Sunrise Hike</div>
            <div class="card-desc">Pre-dawn hike up Bali's most accessible volcano for one of Southeast Asia's great sunrises. The 2-hour trek reaches the rim at 1,717m. Breakfast of eggs cooked in volcanic steam at the top. Back at your villa by mid-morning.</div>
            <div class="card-footer">
              <span class="card-price">$17–$45/person</span>
              <span class="card-duration">5–6 hrs total</span>
            </div>
          </div>
        </div>
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--gold);"></div>
          <div class="card-body">
            <div class="card-tag">Island Day Trip</div>
            <div class="card-name">Nusa Penida Snorkeling Tour</div>
            <div class="card-desc">A quick boat ride to Nusa Penida — a rugged island off Bali's coast with rainforested hills and crystal-clear water. Swim with manta rays at Manta Point, visit the iconic Kelingking Beach cliff, and snorkel Diamond Beach. Full day from Bali.</div>
            <div class="card-footer">
              <span class="card-price">~$50–$70/person</span>
              <span class="card-duration">Full Day</span>
            </div>
          </div>
        </div>
        <div class="activity-card">
          <div class="card-color-bar" style="background: #7D6B5C;"></div>
          <div class="card-body">
            <div class="card-tag">Culture · Spiritual</div>
            <div class="card-name">Tirta Empul Purification Ceremony</div>
            <div class="card-desc">Bali's holiest site — a 10th-century water temple where locals and visitors bathe in sacred spring pools for purification. One of the most unique cultural experiences in Bali. Sarong rental included. Entrance ~$3 USD.</div>
            <div class="card-footer">
              <span class="card-price">~$3 entry</span>
              <span class="card-duration">2 hrs</span>
            </div>
          </div>
        </div>
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--stamp-red);"></div>
          <div class="card-body">
            <div class="card-tag">Sunset · Culture</div>
            <div class="card-name">Uluwatu Temple + Kecak Dance</div>
            <div class="card-desc">The Uluwatu Temple perches dramatically on a sea cliff 70m above the Indian Ocean. As the sun sets, watch a traditional Kecak fire dance performance on the cliff's edge — one of Bali's most atmospheric experiences. Memorable evening for the whole group.</div>
            <div class="card-footer">
              <span class="card-price">$10–$20/person</span>
              <span class="card-duration">Evening</span>
            </div>
          </div>
        </div>
      </div>

      <hr class="dashed-divider" />

      <div class="highlight-box">
        <h3>Spa Day Reminder 💆</h3>
        <p>Don't skip a Balinese massage. A 60-minute traditional massage at a local spa runs $5–10 USD. The same treatment at a resort costs $50+. We're going local. Book a group session at a Ubud spa — most fit 6–10 people and can be arranged through your driver.</p>
      </div>

      <div class="tips-grid" style="margin-top: 2.5rem;">
        <div class="tip-card">
          <div class="tip-icon">🐒</div>
          <div class="tip-title">Monkey Forest Warning</div>
          <div class="tip-text">The monkeys at Sacred Monkey Forest are not shy. Hold your phone, sunglasses, and any snacks tightly. They will take your things and show zero remorse.</div>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🕌</div>
          <div class="tip-title">Temple Dress Code</div>
          <div class="tip-text">Shoulders and knees must be covered at all temples. Sarong rentals are available at entrances for a small fee (often included in your tour).</div>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🍜</div>
          <div class="tip-title">Eat at Warungs</div>
          <div class="tip-text">Local family-run warungs serve incredible nasi goreng (fried rice) for $1–2 USD. Don't eat tourist-area restaurants every night or you'll blow your budget for no reason.</div>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🌅</div>
          <div class="tip-title">Book Activities Early</div>
          <div class="tip-text">Bali fills up, especially in July–August. Book the Mt. Batur hike and Nusa Penida tours at least a few days in advance to get preferred times.</div>
        </div>
      </div>

      <hr class="dashed-divider" />

      <div class="section-eyebrow">Where We Stay</div>
      <h2 class="section-title">Housing <em>Options</em></h2>
      <p class="section-intro">From private pool villas in Ubud to beachfront stays in Seminyak — here's the full breakdown of where the group can stay, with prices and trade-offs.</p>
      <button class="booking-cta" style="background: var(--teal);" @click="navigate('bali-housing')">→ Explore Housing Options</button>
    </div>
  </div>
</template>
