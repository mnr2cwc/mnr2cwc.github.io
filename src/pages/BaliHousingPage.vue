<script setup lang="ts">
import { navigate } from '../navigation'
</script>

<template>
  <div>
    <div class="bali-hero">
      <div class="dest-hero-inner">
        <div class="dest-hero-top">
          <div class="dest-hero-text">
            <div class="dest-page-stamp">Stop 02 · Bali · Housing</div>
            <h1 class="dest-h1">
              Where We<em>Stay</em>
              <div class="image-container">
                <img src="/images/bali1.jpg" /><!-- TODO: swap for a housing photo -->
              </div>
            </h1>
            <p class="dest-tagline"><!-- TODO: intro tagline about Bali housing --></p>
            <div class="dest-stats">
              <div class="dest-stat">
                <div class="s-num"><!-- TODO --></div>
                <div class="s-label"><!-- TODO --></div>
              </div>
              <div class="dest-stat">
                <div class="s-num"><!-- TODO --></div>
                <div class="s-label"><!-- TODO --></div>
              </div>
              <div class="dest-stat">
                <div class="s-num"><!-- TODO --></div>
                <div class="s-label"><!-- TODO --></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <!-- Back link to the Bali page -->
      <button class="booking-cta" style="background: var(--teal); margin-bottom: 1.5rem;" @click="navigate('bali')">← Back to Bali</button>

      <div class="tape">Villas · Airbnbs · Where to Sleep</div>

      <p class="section-intro"><!-- TODO: overview paragraph about housing options in Bali --></p>

      <div class="section-eyebrow">Compare Your Options</div>
      <h2 class="section-title">Housing <em>Options</em></h2>

      <!-- Option cards — duplicate an .activity-card block for each housing option -->
      <div class="activities-grid">
        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--jungle);"></div>
          <div class="card-body">
            <div class="card-tag"><!-- TODO: e.g. Private Villa · Ubud --></div>
            <div class="card-name">Luxury Beach Front Villa with Infinity Pool, Staff and Breathtaking Views!</div>
            <div class="card-desc">
              <p>Private villa with 5 bedrooms, infinity pool, and direct beach access. Includes daily staff for cleaning and breakfast. Perfect for groups looking for luxury and privacy.</p>
              <ul>
                <li>5 Bedrooms</li>
                <li>5 Bathrooms</li>
                <li>Infinity Pool</li>
                <li>Beach Access</li>
                <li>Daily Staff Service</li>
              </ul>
            </div>
            <div class="card-footer">
              <span class="card-price">$336 a night</span>
              <span class="card-duration">$100pp for 3 nights for 10 people
                <a href="https://www.vrbo.com/497641ha?chkin=2027-04-30&chkout=2027-05-03&d1=2027-04-30&d2=2027-05-03&startDate=2027-04-30&endDate=2027-05-03&flexibility=2_DAY_LOWER&flexibility=3_DAY_UPPER&searchRange=2026-07-01_2026-07-31&searchRange=2027-05-01_2027-05-31&x_pwa=1&rfrr=HSR&pwa_ts=1782167714867&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=true&adults=10&regionId=602651&destination=Bali%2C+Indonesia&destType=MARKET&latLong=-8.340539%2C115.09195&searchId=254f5d1d-249c-46fb-aa1b-23d751d87e5d&sort=RECOMMENDED&top_dp=336&top_cur=USD&userIntent=&selectedRoomType=29491463&selectedRatePlan=00012ef2b62974b14101a7853eeee38d3e6e&expediaPropertyId=29491463">(VRBO Link)</a>
              </span>
            </div>
            <div class="image-container">
              <img src="/images/BaliVilla1.avif" /><!-- TODO: housing photo -->
            </div>
          </div><!-- /card-body -->
        </div><!-- /activity-card -->

        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--coral);"></div>
          <div class="card-body">
            <div class="card-tag"><!-- TODO --></div>
            <div class="card-name"><!-- TODO --></div>
            <div class="card-desc"><!-- TODO --></div>
            <div class="card-footer">
              <span class="card-price"><!-- TODO --></span>
              <span class="card-duration"><!-- TODO --></span>
            </div>
          </div>
        </div>

        <div class="activity-card">
          <div class="card-color-bar" style="background: var(--gold);"></div>
          <div class="card-body">
            <div class="card-tag"><!-- TODO --></div>
            <div class="card-name"><!-- TODO --></div>
            <div class="card-desc"><!-- TODO --></div>
            <div class="card-footer">
              <span class="card-price"><!-- TODO --></span>
              <span class="card-duration"><!-- TODO --></span>
            </div>
          </div>
        </div>
      </div>

      <hr class="dashed-divider" />

      <div class="highlight-box">
        <h3>adawd<!-- TODO: a key housing tip or recommendation --></h3>
        <p><!-- TODO --></p>
      </div>

      <!-- Quick tips — duplicate .tip-card blocks as needed -->
      <div class="tips-grid" style="margin-top: 2.5rem;">
        <div class="tip-card">
          <div class="tip-icon"><!-- TODO: emoji --></div>
          <div class="tip-title">QSQSQS<!-- TODO --></div>
          <div class="tip-text"><!-- TODO --></div>
        </div>
        <div class="tip-card">
          <div class="tip-icon"><!-- TODO: emoji --></div>
          <div class="tip-title"><!-- TODO --></div>
          <div class="tip-text"><!-- TODO --></div>
        </div>
      </div>
    </div>
  </div>
</template>
