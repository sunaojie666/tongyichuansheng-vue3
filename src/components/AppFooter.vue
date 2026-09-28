<script setup>
import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import gonganBeianUrl from '../../assets/images/gongan_beian.png'

const route = useRoute()
const router = useRouter()

const productLinks = [
  { label: '功能介绍', sectionId: 'features' },
  { label: '使用场景', sectionId: 'scenarios' },
  { label: '下载', sectionId: 'download' },
]

const tutorialLinks = [
  { label: '图文教程', to: { path: '/tutorial', query: { type: 'text' } } },
  { label: '视频教程', to: { path: '/tutorial', query: { type: 'video' } } },
]

const legalLinks = [
  { label: '用户协议', to: { name: 'user-agreement' } },
  { label: '隐私政策', to: { name: 'privacy-policy' } },
]

const friendlyLinks = [
  {
    label: '影优尽优官网',
    href: 'https://www.douyinggongchang.com/ruan-jian-xia-zai/',
  },
  {
    label: '影优尽优-虚拟相机',
    href: 'https://www.kunshun.net/?page=home',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    path: 'M14 8.5h2.5V5h-2.9c-3 0-4.6 1.8-4.6 4.8V12H6v3.6h3V23h3.8v-7.4h3.1l.6-3.6h-3.7V10c0-1 .3-1.5 1.2-1.5Z',
  },
  {
    name: 'X',
    path: 'M4 4h4.5l3.9 5.5L17.2 4H20l-6.3 7.2L21 21h-4.5l-4.4-6.1L6.8 21H4l6.8-7.8L4 4Zm3.2 1.8 10.2 13.4h1.4L8.7 5.8H7.2Z',
  },
  {
    name: 'GitHub',
    path: 'M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z',
  },
]

const scrollToSection = async (sectionId) => {
  if (route.path !== '/') {
    await router.push({ path: '/' })
    await nextTick()
  }

  const target = document.getElementById(sectionId)
  const headerHeight = document.querySelector('.app-header')?.offsetHeight ?? 0

  if (!target) return

  if (window.location.hash) {
    window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search)
  }

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - headerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h2>影优尽优——同声传译助手</h2>
        <p>
          基于先进 AI 技术的实时同声传译软件，
          <span>让语言不再是沟通的边界</span>
        </p>

        <a class="footer-email" href="mailto:business@vicastcam.com">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v12H4V6Zm1.5 2.2 6.5 4.5 6.5-4.5M5.5 16.5h13" />
          </svg>
          business@vicastcam.com
        </a>

        <div class="social-links" aria-label="社交媒体">
          <a v-for="item in socialLinks" :key="item.name" href="#" :aria-label="item.name">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="item.path" />
            </svg>
          </a>
        </div>
      </div>

      <nav class="footer-nav" aria-label="底部导航">
        <div class="footer-column">
          <h3>产品</h3>
          <button
            v-for="link in productLinks"
            :key="link.label"
            class="footer-link"
            type="button"
            @click="scrollToSection(link.sectionId)"
          >
            {{ link.label }}
          </button>
        </div>

        <div class="footer-column">
          <h3>教程中心</h3>
          <RouterLink
            v-for="link in tutorialLinks"
            :key="link.label"
            class="footer-link"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="footer-column">
          <h3>隐私政策</h3>
          <RouterLink
            v-for="link in legalLinks"
            :key="link.label"
            class="footer-link"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="footer-column">
          <h3>友情链接</h3>
          <a
            v-for="link in friendlyLinks"
            :key="link.href"
            class="footer-link"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </nav>

      <div class="footer-bottom">
        <p>© 2026 影优尽优 · 让语言不再是边界</p>
        <div class="beian-links">
          <a class="gongan-link" href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" rel="noopener noreferrer">
            <img :src="gonganBeianUrl" class="gongan-icon" alt="公安备案" />
            <span>豫公网安备41030502001292号</span>
          </a>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备20020207号‑1</a>
          <p class="footer-copyright">Copyright © 2026 河南抖影电子科技有限公司 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  min-height: 380px;
  padding: 46px 0 34px;
  background: #07101f;
}

.footer-inner {
  display: grid;
  grid-template-columns: 300px 676px;
  grid-template-rows: 1fr auto;
  column-gap: 130px;
  width: 1154px;
  max-width: 100%;
  min-height: 244px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-brand {
  min-width: 0;
}

.footer-brand h2 {
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
}

.footer-brand p {
  width: 310px;
  max-width: 100%;
  margin: 17px 0 0;
  color: #8b95a5;
  font-size: 12px;
  line-height: 1.75;
}

.footer-brand p span {
  display: block;
}

.footer-email {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 31px;
  color: #9aa5b5;
  font-size: 12px;
  line-height: 1;
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-email:hover {
  color: #ffffff;
}

.footer-email svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.social-links {
  display: flex;
  gap: 21px;
  margin-top: 27px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: #9aa5b5;
  text-decoration: none;
  transition:
    color 180ms ease,
    transform 180ms ease;
}

.social-links a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.social-links svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 42px;
  row-gap: 24px;
  width: 676px;
  min-width: 0;
}

.footer-column {
  min-width: 0;
}

.footer-column h3 {
  margin: 0 0 25px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
}

.footer-link {
  display: block;
  width: fit-content;
  margin-top: 18px;
  padding: 0;
  border: 0;
  color: #8b95a5;
  background: transparent;
  font: inherit;
  font-size: 14px;
  line-height: 1;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: color 180ms ease;
}

.footer-link:first-of-type {
  margin-top: 0;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  color: #7d8796;
  font-size: 12px;
}

.footer-bottom p {
  margin: 0;
}

.beian-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
  margin-left: 120px;
}

.gongan-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.gongan-icon {
  display: block;
  width: 15px;
  height: auto;
  flex-shrink: 0;
}

.footer-bottom a {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-bottom a:hover {
  color: #ffffff;
}

@media (max-width: 1160px) and (min-width: 901px) {
  .footer-inner {
    grid-template-columns: minmax(240px, 0.8fr) minmax(0, 1fr);
    column-gap: 60px;
  }

  .footer-nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 32px;
    width: 100%;
  }

}

@media (max-width: 900px) {
  .app-footer {
    min-height: auto;
    padding-top: 44px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    width: 100%;
    min-height: auto;
    row-gap: 42px;
  }

  .footer-nav {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    gap: 32px;
  }

  .footer-bottom {
    gap: 14px;
  }
}

@media (max-width: 560px) {
  .app-footer {
    padding: 40px 0 32px;
  }

  .footer-inner {
    padding-right: 14px;
    padding-left: 14px;
  }

  .footer-inner {
    row-gap: 36px;
  }

  .footer-brand p {
    width: 100%;
  }

  .footer-nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
  }

  .footer-email {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 360px) {
  .footer-inner {
    padding-right: 12px;
    padding-left: 12px;
  }
}
</style>
