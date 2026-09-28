<script setup>
import { computed, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { legalDocuments, legalNavItems } from '../../constants/legal'

const route = useRoute()

const currentDoc = computed(() => legalDocuments[route.meta.doc] ?? legalDocuments.terms)

const resetScrollPosition = async () => {
  await nextTick()
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

onMounted(resetScrollPosition)
watch(() => route.fullPath, resetScrollPosition)

// 正文块：字符串为段落，数组为列表（列表项本身为数组时渲染成一层子列表）
const isText = (block) => typeof block === 'string'
</script>

<template>
  <main class="legal-page">
    <section class="legal-hero">
      <div class="decor decor--shield" aria-hidden="true"></div>
      <div class="decor decor--ring" aria-hidden="true"></div>

      <div class="legal-shell">
        <header class="legal-header">
          <h1>{{ currentDoc.title }}</h1>
          <p>{{ currentDoc.intro }}</p>
        </header>

        <div class="legal-layout">
          <aside class="legal-sidebar" aria-label="条款导航">
            <h2>条款中心</h2>
            <RouterLink
              v-for="item in legalNavItems"
              :key="item.label"
              class="legal-nav-item"
              active-class="legal-nav-item--active"
              :to="item.to"
            >
              {{ item.label }}
            </RouterLink>
          </aside>

          <article :key="currentDoc.id" class="legal-content">
            <section
              v-for="section in currentDoc.sections"
              :key="section.title"
              class="legal-section"
            >
              <h2>{{ section.title }}</h2>

              <template v-for="(block, blockIndex) in section.content" :key="blockIndex">
                <p v-if="isText(block)">{{ block }}</p>

                <ul v-else class="legal-list">
                  <template v-for="(item, itemIndex) in block" :key="itemIndex">
                    <li v-if="isText(item)">{{ item }}</li>

                    <li v-else class="legal-list__wrap">
                      <ul class="legal-list legal-list--sub">
                        <li v-for="sub in item" :key="sub">{{ sub }}</li>
                      </ul>
                    </li>
                  </template>
                </ul>
              </template>
            </section>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  padding-top: 90px;
  color: #101828;
  background: #f3f7fc;
  overflow-x: clip;
}

.legal-hero {
  position: relative;
  padding: 48px 24px 64px;
  overflow: clip;
  background: #f3f7fc;
}

.legal-hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 330px;
  background:
    radial-gradient(circle at 15% 8%, rgba(255, 255, 255, 0.96) 0 7%, transparent 22%),
    radial-gradient(circle at 91% 15%, rgba(169, 206, 255, 0.5) 0 8%, transparent 24%),
    radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.98) 0 25%, transparent 57%),
    linear-gradient(180deg, #eff6ff 0%, #f8fbff 62%, rgba(243, 247, 252, 0) 100%);
  pointer-events: none;
}

.decor {
  position: absolute;
  pointer-events: none;
}

.decor--shield {
  top: 30px;
  left: -6px;
  width: 240px;
  height: 180px;
  background:
    linear-gradient(29deg, transparent 0 18%, rgba(255, 255, 255, 0.95) 18.4% 44%, transparent 44.4%),
    linear-gradient(41deg, transparent 0 33%, rgba(93, 158, 245, 0.5) 33.4% 57%, transparent 57.4%);
  filter: drop-shadow(0 24px 28px rgba(76, 137, 219, 0.14));
  opacity: 0.75;
  transform: rotate(-6deg);
}

.decor--ring {
  top: 6px;
  right: 62px;
  width: 226px;
  height: 166px;
  border: 22px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 178, 246, 0.3), rgba(255, 255, 255, 0) 62%);
  box-shadow: 0 26px 48px rgba(72, 139, 235, 0.12);
  opacity: 0.7;
}

.legal-shell {
  position: relative;
  z-index: 1;
  width: 1154px;
  max-width: 100%;
  min-width: 0;
  margin: 0 auto;
}

.legal-header {
  text-align: center;
}

.legal-header h1 {
  margin: 0;
  color: #0f172a;
  font-size: 50px;
  font-weight: 900;
  line-height: 1.12;
  overflow-wrap: anywhere;
}

.legal-header p {
  max-width: 100%;
  margin: 16px auto 0;
  color: #4a5568;
  font-size: 18px;
  line-height: 1.5;
  white-space: nowrap;
  overflow-wrap: normal;
}

.legal-layout {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  min-width: 0;
  margin: 28px auto 0;
}

.legal-sidebar,
.legal-content {
  min-width: 0;
  border: 1px solid #dce7f6;
  background: #fdfeff;
  box-shadow: 0 18px 44px rgba(70, 113, 163, 0.11);
}

.legal-sidebar {
  overflow: hidden;
  border-radius: 14px;
}

.legal-sidebar h2 {
  display: flex;
  align-items: center;
  height: 64px;
  margin: 0;
  padding: 0 20px;
  color: #111827;
  font-size: 15px;
  font-weight: 800;
}

.legal-nav-item {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 55px;
  padding: 0 20px;
  color: #2f3746;
  font-size: 14px;
  line-height: 1.45;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition:
    color 180ms ease,
    background 180ms ease;
}

.legal-nav-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: transparent;
}

.legal-nav-item:hover {
  background: #f5f9ff;
}

.legal-nav-item--active {
  color: #1268ff;
  background: #eef4ff;
}

.legal-nav-item--active::before {
  background: #1268ff;
}

.legal-content {
  overflow: hidden;
  border-radius: 18px;
  padding: 8px 34px 32px;
  animation: legal-fade-in 220ms ease;
}

@keyframes legal-fade-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .legal-content {
    animation: none;
  }
}

.legal-section {
  padding: 24px 0;
  border-bottom: 1px solid #e6edf6;
}

.legal-section:last-child {
  border-bottom: 0;
}

.legal-section h2 {
  position: relative;
  margin: 0;
  padding-left: 14px;
  color: #101828;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.legal-section h2::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  width: 4px;
  height: calc(100% - 8px);
  border-radius: 999px;
  background: linear-gradient(180deg, #3c8cff, #1769ff);
}

.legal-section p {
  margin: 12px 0 0;
  padding-left: 14px;
  color: #5b6472;
  font-size: 14px;
  line-height: 1.9;
  text-align: justify;
  overflow-wrap: anywhere;
}

.legal-list {
  margin: 10px 0 0;
  padding-left: 34px;
  color: #5b6472;
  font-size: 14px;
  line-height: 1.9;
}

.legal-list li {
  margin-top: 6px;
  text-align: justify;
  overflow-wrap: anywhere;
}

.legal-list__wrap {
  list-style: none;
}

.legal-list--sub {
  margin-top: 0;
  padding-left: 18px;
  list-style-type: circle;
}

@media (max-width: 960px) {
  .legal-page {
    padding-top: 72px;
  }

  .legal-layout {
    grid-template-columns: 1fr;
  }

  .decor--shield {
    left: -96px;
  }

  .decor--ring {
    right: -86px;
  }
}

@media (max-width: 620px) {
  .legal-hero {
    padding: 32px 14px 48px;
  }

  .decor--shield,
  .decor--ring {
    opacity: 0.36;
  }

  .decor--shield {
    left: -156px;
  }

  .decor--ring {
    right: -132px;
    width: 180px;
    height: 132px;
    border-width: 18px;
  }

  .legal-header h1 {
    font-size: 34px;
  }

  .legal-header p {
    width: min(320px, 100%);
    font-size: 14px;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .legal-layout {
    margin-top: 28px;
  }

  .legal-sidebar h2 {
    height: 54px;
    padding: 0 18px;
  }

  .legal-nav-item {
    min-height: 46px;
    padding-right: 18px;
    padding-left: 18px;
    font-size: 13px;
  }

  .legal-content {
    padding: 4px 18px 24px;
  }

  .legal-section {
    padding: 20px 0;
  }

  .legal-section h2 {
    font-size: 16px;
  }

  .legal-list {
    padding-left: 22px;
  }
}

@media (max-width: 360px) {
  .legal-hero {
    padding-right: 12px;
    padding-left: 12px;
  }

  .legal-header h1 {
    font-size: 31px;
  }

  .legal-content {
    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
