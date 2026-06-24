<script setup>
import HomeCta from './components/HomeCta.vue'
import HomeFeatures from './components/HomeFeatures.vue'
import HomeHero from './components/HomeHero.vue'
import HomeQuickStart from './components/HomeQuickStart.vue'
import HomeScenarios from './components/HomeScenarios.vue'
import HomeTestimonials from './components/HomeTestimonials.vue'
</script>

<template>
  <main class="home-page">
    <HomeHero />
    <HomeFeatures />
    <HomeScenarios />
    <HomeQuickStart />
    <HomeTestimonials />
    <HomeCta />
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  padding-top: 90px;
  background: #ffffff;
}

@media (max-width: 900px) {
  .home-page {
    padding-top: 72px;
  }
}
</style>
