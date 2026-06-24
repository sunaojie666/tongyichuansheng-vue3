<script setup>
const footerColumns = [
  {
    title: '产品',
    links: [
      { label: '功能介绍', href: '#' },
      { label: '使用场景', href: '#' },
      { label: '下载', href: '#' },
      { label: '更新日志', href: '#' },
    ],
  },
  {
    title: '公司',
    links: [
      { label: '关于我们', href: '#' },
      { label: '隐私政策', href: '#' },
      { label: '用户协议', href: '#' },
      { label: '销售政策', href: '#' },
    ],
  },
  {
    title: '支持',
    links: [
      { label: '使用文档', href: '#' },
      { label: '教程', to: '/tutorial' },
      { label: '常见问题', href: '#' },
      { label: '联系我们', href: '#' },
    ],
  },
]

const socialLinks = [
  { label: 'f', name: 'Facebook' },
  { label: '𝕏', name: 'X' },
  { label: '⌘', name: 'GitHub' },
]
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h2>影优尽优同声传译助手</h2>
        <p>基于先进 AI 技术的实时同声传译软件，让语言不再是沟通的边界</p>

        <a class="footer-email" href="mailto:business@vicastcam.com">
          <span>✉</span>
          business@vicastcam.com
        </a>

        <div class="social-links" aria-label="社交媒体">
          <a
            v-for="item in socialLinks"
            :key="item.name"
            href="#"
            :aria-label="item.name"
          >
            {{ item.label }}
          </a>
        </div>
      </div>

      <nav class="footer-nav" aria-label="底部导航">
        <div v-for="column in footerColumns" :key="column.title" class="footer-column">
          <h3>{{ column.title }}</h3>
          <template v-for="link in column.links" :key="link.label">
            <RouterLink v-if="link.to" :to="link.to">{{ link.label }}</RouterLink>
            <a v-else :href="link.href">{{ link.label }}</a>
          </template>
        </div>
      </nav>

      <div class="footer-bottom">
        <p>© 2026 影优尽优 · 让语言不再是边界</p>
        <p>豫ICP备XXXXXXXX号</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  height: 397px;
  padding: 64px 24px 52px;
  background: #07101f;
}

.footer-inner {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 168px;
  width: 1154px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
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
  width: 260px;
  max-width: 100%;
  margin: 24px 0 0;
  color: #8b95a5;
  font-size: 12px;
  line-height: 1.7;
}

.footer-email {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  color: #9aa5b5;
  font-size: 12px;
  text-decoration: none;
}

.footer-email span {
  font-size: 12px;
}

.social-links {
  display: flex;
  gap: 22px;
  margin-top: 28px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: #9aa5b5;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  transition:
    color 220ms ease,
    transform 220ms ease;
}

.social-links a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 92px;
  min-width: 0;
}

.footer-column {
  min-width: 0;
}

.footer-column h3 {
  margin: 0 0 28px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
}

.footer-column a {
  display: block;
  margin-top: 18px;
  color: #8b95a5;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 220ms ease;
}

.footer-column a:first-of-type {
  margin-top: 0;
}

.footer-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  color: #7d8796;
  font-size: 12px;
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom p:last-child {
  text-align: center;
}

@media (max-width: 900px) {
  .app-footer {
    height: auto;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    height: auto;
    gap: 48px;
  }

  .footer-brand p {
    width: min(360px, 100%);
  }

  .footer-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .footer-bottom p:last-child {
    text-align: left;
  }
}

@media (max-width: 560px) {
  .app-footer {
    padding: 44px 14px 36px;
  }

  .footer-nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 28px;
  }

  .footer-inner {
    gap: 38px;
  }

  .footer-email {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 360px) {
  .app-footer {
    padding-right: 12px;
    padding-left: 12px;
  }
}
</style>
