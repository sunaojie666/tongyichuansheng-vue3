<script setup>
import bgUrl from '../../../../assets/images/image.png.png'
import downloadIconUrl from '../../../../assets/images/icon-download-client.png'
import tutorialIconUrl from '../../../../assets/images/icon-view-tutorial.png'
import starUrl from '../../../../assets/images/star.png'
import worldUrl from '../../../../assets/images/world.png'
import HomeStats from './HomeStats.vue'
</script>

<template>
  <section id="download" class="hero-section" :style="{ backgroundImage: `url(${bgUrl})` }">
    <div class="home-content">
      <div class="hero-copy">
        <div class="hero-badge">
          <img :src="starUrl" alt="" />
          <strong>AI赋能的直播工具</strong>
        </div>

        <h1>
          <span>AI 同声传译</span>
          <strong>让语言不再是边界</strong>
        </h1>

        <p class="hero-desc">
          搭载前沿大语言翻译模型，毫秒级低延迟同步直播字幕，覆盖 60+
          语种，全适配主流直播平台与 OBS。助力每一位跨境主播打破语言边界，让全球观众实时听懂直播内容。
        </p>

        <div class="hero-actions">
          <a class="download-button is-active" href="#">
            <img :src="downloadIconUrl" alt="" aria-hidden="true" />
            下载客户端
          </a>
          <RouterLink class="tutorial-button" to="/tutorial">
            <img :src="tutorialIconUrl" alt="" aria-hidden="true" />
            查看教程
          </RouterLink>
        </div>

        <p class="hero-note">
          <span>◎</span>
          低延迟实时传译・多语种无缝切换・直播沟通无国界
        </p>
      </div>

      <div class="hero-visual" aria-label="AI 同声传译场景图">
        <img :src="worldUrl" alt="" />
      </div>
    </div>

    <HomeStats />
  </section>
</template>

<style scoped>
.hero-section {
  height: 793px;
  min-height: 793px;
  padding: 40px 24px 56px;
  overflow: hidden;
  background-color: #eef6ff;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home-content {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 470px) minmax(0, 1fr);
  align-items: center;
  width: 1154px;
  max-width: 100%;
  height: 535px;
  margin: 0 auto;
}

.hero-copy {
  position: relative;
  z-index: 2;
  min-width: 0;
  padding-top: 32px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 242px;
  height: 28px;
  padding: 0 20px;
  border-radius: 999px;
  color: #1e64ff;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(54, 114, 255, 0.12);
}

.hero-badge img {
  display: block;
  width: 16px;
  height: 16px;
}

.hero-badge strong {
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(
    112.91deg,
    rgba(39, 100, 220, 1) 0%,
    rgba(53, 137, 230, 1) 53.06%,
    rgba(20, 180, 139, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-copy h1 {
  margin: 36px 0 0;
  color: #11182f;
  font-size: 58px;
  font-weight: 800;
  line-height: 1.12;
  overflow-wrap: anywhere;
}

.hero-copy h1 span,
.hero-copy h1 strong {
  display: block;
}

.hero-copy h1 strong {
  color: #2178ff;
  background: linear-gradient(90deg, #2468ff 0%, #2491ff 55%, #22be86 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  width: 468px;
  max-width: 100%;
  margin: 24px 0 0;
  color: #526071;
  font-size: 14px;
  line-height: 1.75;
  overflow-wrap: anywhere;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 34px;
}

.download-button,
.tutorial-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 53px;
  padding: 0 22px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;
}

.download-button img,
.tutorial-button img {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex: 0 0 auto;
  transition: filter 180ms ease, transform 180ms ease;
}

.download-button {
  width: 160px;
  color: #ffffff;
  background: linear-gradient(135deg, #1268ff 0%, #1677ff 100%);
  box-shadow:
    0 14px 28px rgba(18, 104, 255, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.12) inset;
}

.download-button.is-active {
  box-shadow:
    0 16px 32px rgba(18, 104, 255, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.download-button img {
  filter: brightness(0) invert(1);
}

.tutorial-button {
  width: 176px;
  color: #143256;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(18, 104, 255, 0.14);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
}

.tutorial-button:hover {
  border-color: rgba(18, 104, 255, 0.28);
  color: #1268ff;
  background: #ffffff;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 28px 0 0;
  color: #7b8796;
  font-size: 16px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.hero-note span {
  color: #7b8796;
}

.hero-visual {
  position: relative;
  z-index: 1;
  min-width: 0;
  height: 504px;
  margin-left: -18px;
}

.hero-visual img {
  position: absolute;
  top: -14px;
  right: -152px;
  width: 894px;
  height: 504px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}

@media (max-width: 1100px) {
  .hero-section {
    height: auto;
    padding-top: 0;
    padding-bottom: 56px;
    overflow: hidden;
  }

  .home-content {
    grid-template-columns: 1fr;
    height: auto;
  }

  .hero-copy {
    padding-top: 56px;
  }

  .hero-visual {
    height: 360px;
    margin: 40px 0 0;
  }

  .hero-visual img {
    left: 50%;
    right: auto;
    width: min(760px, 112vw);
    height: auto;
    transform: translateX(-50%);
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-right: 14px;
    padding-left: 14px;
  }

  .hero-copy {
    padding-top: 48px;
  }

  .hero-copy h1 {
    font-size: 34px;
    line-height: 1.16;
  }

  .hero-badge {
    width: auto;
    max-width: 100%;
    padding: 0 14px;
  }

  .hero-desc,
  .hero-note {
    font-size: 14px;
  }

  .hero-note {
    align-items: flex-start;
    max-width: 100%;
  }

  .hero-actions {
    flex-direction: column;
    gap: 14px;
  }

  .download-button,
  .tutorial-button {
    width: 100%;
  }

  .hero-visual {
    height: clamp(214px, 70vw, 280px);
    margin-top: 30px;
  }

  .hero-visual img {
    width: min(520px, 100vw);
  }
}

@media (max-width: 360px) {
  .hero-section {
    padding-right: 12px;
    padding-left: 12px;
  }

  .hero-copy h1 {
    font-size: 31px;
  }

  .hero-badge strong,
  .hero-desc,
  .hero-note {
    font-size: 13px;
  }

  .download-button,
  .tutorial-button {
    height: 50px;
    font-size: 15px;
  }
}
</style>
