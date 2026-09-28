<script setup>
import { nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logoUrl from '../../assets/images/logo.png'

const navItems = [
  { label: '客户端下载', sectionId: 'download' },
  { label: '使用场景', sectionId: 'scenarios' },
  { label: '用户评价', sectionId: 'testimonials' },
  {
    label: '软件教程',
    isMenu: true,
    children: [
      { label: '图文教程', to: { path: '/tutorial', query: { type: 'text' } } },
      { label: '视频教程', to: { path: '/tutorial', query: { type: 'video' } } },
    ],
  },
]

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const activeDesktopMenu = ref('')

const scrollToSection = async (sectionId) => {
  if (!sectionId) return

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

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const closeDesktopMenu = () => {
  activeDesktopMenu.value = ''
}

const openDesktopMenu = (item) => {
  if (!item.isMenu) return

  activeDesktopMenu.value = item.label
}

const showDesktopMenu = (item) => {
  if (!item.isMenu) return

  activeDesktopMenu.value = item.label
}

const handleDesktopMenuFocusOut = (event) => {
  if (event.currentTarget.contains(event.relatedTarget)) return

  closeDesktopMenu()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleNavClick = (item) => {
  closeDesktopMenu()
  scrollToSection(item.sectionId)
}

const handleMobileNavClick = (item) => {
  closeMobileMenu()
  scrollToSection(item.sectionId)
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
    closeDesktopMenu()
  },
)
</script>

<template>
  <header class="app-header" :class="{ 'app-header--menu-open': isMobileMenuOpen }">
    <div class="app-header__inner">
      <RouterLink class="brand" to="/" aria-label="影优尽优-同声传译助手首页">
        <img class="brand-logo" :src="logoUrl" alt="" />
        <span class="brand-copy">
          <span class="brand-name">同声传译助手</span>
          <span class="brand-tagline">-影优尽优 · 直播生态-</span>
        </span>
      </RouterLink>

      <nav class="nav-menu" aria-label="主导航">
        <template v-for="item in navItems" :key="item.label">
          <div
            class="nav-item"
            :class="{
              'nav-item--menu': item.isMenu,
              'nav-item--open': activeDesktopMenu === item.label,
            }"
            @mouseenter="openDesktopMenu(item)"
            @mouseleave="closeDesktopMenu"
            @focusin="openDesktopMenu(item)"
            @focusout="handleDesktopMenuFocusOut"
          >
            <button
              v-if="!item.isMenu"
              class="nav-link"
              type="button"
              @click="handleNavClick(item)"
            >
              {{ item.label }}
            </button>

            <button
              v-if="item.isMenu"
              class="nav-link nav-link--menu"
              type="button"
              aria-haspopup="menu"
              :aria-expanded="activeDesktopMenu === item.label"
              @click="showDesktopMenu(item)"
            >
              <span>{{ item.label }}</span>
              <span class="nav-link__arrow" aria-hidden="true"></span>
            </button>

            <div v-if="item.children" class="nav-popover" role="menu">
              <RouterLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="nav-popover__link"
                role="menuitem"
                @click="closeDesktopMenu"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
        </template>
      </nav>

      <button
        class="mobile-menu-button"
        :class="{ 'mobile-menu-button--open': isMobileMenuOpen }"
        type="button"
        aria-controls="mobile-nav-panel"
        :aria-expanded="isMobileMenuOpen"
        :aria-label="isMobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav
      id="mobile-nav-panel"
      v-show="isMobileMenuOpen"
      class="mobile-nav-panel"
      aria-label="移动端导航"
    >
      <template v-for="item in navItems" :key="item.label">
        <button
          v-if="!item.isMenu"
          class="mobile-nav-link"
          type="button"
          @click="handleMobileNavClick(item)"
        >
          {{ item.label }}
        </button>

        <div v-else class="mobile-nav-group">
          <div class="mobile-nav-group__title">{{ item.label }}</div>
          <RouterLink
            v-for="child in item.children"
            :key="child.label"
            :to="child.to"
            class="mobile-nav-link mobile-nav-link--child"
            @click="closeMobileMenu"
          >
            {{ child.label }}
          </RouterLink>
        </div>
      </template>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 90px;
  background: #ffffff;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
}

.app-header__inner {
  display: flex;
  align-items: center;
  width: 1154px;
  max-width: 100%;
  height: 90px;
  margin: 0 auto;
  padding: 0 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  flex: 0 0 auto;
  gap: 20px;
  color: #111827;
  text-decoration: none;
  transition: transform 220ms ease;
}

.brand:hover {
  transform: translateY(-1px);
}

.brand-logo {
  display: block;
  width: 60px;
  height: 60px;
}

.brand-copy {
  display: grid;
  min-width: 0;
  gap: 7px;
}

.brand-name {
  color: #111827;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.brand-tagline {
  padding: 2px 4px;
  color: #06356f;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: 0;
  text-align: center;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 58px;
  margin: 0 auto;
  padding-left: 134px;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 90px;
}

.nav-item::after {
  content: "";
  position: absolute;
  top: 58px;
  left: -18px;
  width: calc(100% + 36px);
  height: 28px;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #111827;
  border: 0;
  padding: 0;
  background: transparent;
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    color 220ms ease,
    transform 220ms ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -12px;
  width: 24px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #2468ff, #22be86);
  opacity: 0;
  transform: translateX(-50%) scaleX(0.3);
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.nav-link:hover {
  color: #2563eb;
  transform: translateY(-2px);
}

.nav-link:hover::after {
  opacity: 1;
  transform: translateX(-50%) scaleX(1);
}

.nav-link--menu {
  gap: 8px;
}

.nav-link--menu::after {
  display: none;
}

.nav-link__arrow {
  width: 7px;
  height: 7px;
  margin-top: -3px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition:
    margin-top 180ms ease,
    transform 180ms ease;
}

.nav-item--open .nav-link--menu {
  color: #2563eb;
  transform: translateY(-2px);
}

.nav-item--open .nav-link__arrow {
  margin-top: 2px;
  transform: rotate(225deg);
}

.nav-popover {
  position: absolute;
  top: 68px;
  left: 50%;
  z-index: 5;
  display: grid;
  min-width: 138px;
  padding: 8px;
  border: 1px solid #dce7f6;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 8px);
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.nav-popover::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 1px solid #dce7f6;
  border-left: 1px solid #dce7f6;
  background: rgba(255, 255, 255, 0.96);
  transform: translateX(-50%) rotate(45deg);
}

.nav-item--open .nav-popover {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.nav-popover__link {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 6px;
  color: #2f3746;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 180ms ease,
    background 180ms ease;
}

.nav-popover__link:hover {
  color: #1268ff;
  background: #eef4ff;
}

.mobile-menu-button,
.mobile-nav-panel {
  display: none;
}

@media (max-width: 900px) {
  .app-header {
    height: 72px;
    background: #ffffff;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  }

  .app-header__inner {
    position: relative;
    justify-content: space-between;
    width: 100%;
    max-width: none;
    height: 72px;
    padding: 0 18px;
  }

  .brand {
    min-width: 0;
    max-width: calc(100% - 64px);
    color: #111827;
  }

  .brand:hover {
    transform: none;
  }

  .nav-menu {
    display: none;
  }

  .brand-logo {
    width: 48px;
    height: 48px;
  }

  .brand-copy {
    gap: 3px;
  }

  .brand-name {
    font-size: 18px;
  }

  .brand-tagline {
    font-size: 12px;
  }

  .mobile-menu-button {
    appearance: none;
    position: fixed;
    top: 14px;
    right: 18px;
    z-index: 120;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    gap: 5px;
    border: 1px solid #dce7f6;
    border-radius: 8px;
    background: #f8fbff;
    cursor: pointer;
  }

  .mobile-menu-button span {
    display: block;
    width: 21px;
    height: 2px;
    border-radius: 999px;
    background: #111827;
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  .mobile-menu-button--open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .mobile-menu-button--open span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-button--open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-nav-panel {
    position: fixed;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 2;
    display: grid;
    gap: 4px;
    padding: 8px 16px 16px;
    max-height: calc(100dvh - 72px);
    overflow-y: auto;
    border-top: 1px solid #edf2f7;
    background: #ffffff;
    box-shadow: 0 18px 34px rgba(15, 23, 42, 0.1);
  }

.mobile-nav-link {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 12px;
  border: 0;
  border-radius: 8px;
  color: #111827;
  background: transparent;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.2;
  text-decoration: none;
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition:
    color 180ms ease,
    background 180ms ease;
}

  .mobile-nav-link:hover {
    color: #1268ff;
    background: #eef4ff;
  }

  .mobile-nav-group {
    display: grid;
    gap: 4px;
    padding-top: 8px;
    margin-top: 4px;
    border-top: 1px solid #edf2f7;
  }

  .mobile-nav-group__title {
    display: flex;
    align-items: center;
    min-height: 34px;
    padding: 0 12px;
    color: #8a96a8;
    font-size: 13px;
    font-weight: 700;
    overflow-wrap: anywhere;
  }

  .mobile-nav-link--child {
    padding-left: 24px;
    color: #2f3746;
  }
}

@media (max-width: 560px) {
  .app-header__inner {
    padding-right: 14px;
    padding-left: 14px;
  }

  .mobile-menu-button {
    right: 14px;
  }
}

@media (max-width: 360px) {
  .app-header__inner {
    padding-right: 12px;
    padding-left: 12px;
  }

  .brand {
    gap: 8px;
    max-width: calc(100% - 58px);
  }

  .brand-logo {
    width: 44px;
    height: 44px;
  }

  .brand-name {
    font-size: 17px;
  }

  .mobile-menu-button {
    right: 12px;
    width: 42px;
    height: 42px;
    top: 15px;
  }

  .mobile-nav-panel {
    padding-right: 12px;
    padding-left: 12px;
  }
}
</style>
