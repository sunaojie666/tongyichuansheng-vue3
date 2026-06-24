<script setup>
import audioSourceUrl from '../../../../assets/images/quick-start-audio-source.png'
import downloadUrl from '../../../../assets/images/quick-start-download.png'
import interpretationUrl from '../../../../assets/images/quick-start-interpretation.png'
import languageUrl from '../../../../assets/images/quick-start-language.png'
import tutorialIconUrl from '../../../../assets/images/icon-full-tutorial.png'

const steps = [
  {
    image: downloadUrl,
    title: '下载安装',
    desc: '访问官网下载对应系统版本，按照安装向导完成安装',
  },
  {
    image: audioSourceUrl,
    title: '选择音频源',
    desc: '选择麦克风或系统声音，或将软件接入直播伴侣',
  },
  {
    image: languageUrl,
    title: '设置语言',
    desc: '设置源语言和目标语言，一键切换语言组合',
  },
  {
    image: interpretationUrl,
    title: '同声传译',
    desc: '点击开始，AI 立即启动，字幕实时出现，全程无需干预',
  },
]
</script>

<template>
  <section class="quick-start-section">
    <div class="section-header">
      <p>快速使用</p>
      <h2>
        四步开启<span>专业同传</span>
      </h2>
      <strong>安装简单，配置零门槛，5 分钟内即可开始你的第一次同声传译</strong>
    </div>

    <div class="steps-grid">
      <article v-for="item in steps" :key="item.title" class="step-card">
        <img :src="item.image" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </article>
    </div>

    <RouterLink class="tutorial-button is-highlighted" to="/tutorial">
      <img :src="tutorialIconUrl" alt="" aria-hidden="true" />
      查看完整教程
    </RouterLink>
  </section>
</template>

<style scoped>
.quick-start-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 742px;
  padding: 40px 24px 20px;
  background: #ffffff;
}

.section-header {
  width: 1154px;
  max-width: 100%;
  text-align: center;
}

.section-header p {
  margin: 0 0 13px;
  color: #1268ff;
  font-size: 14px;
  font-weight: 600;
}

.section-header h2 {
  margin: 0;
  color: #0f172a;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.section-header h2 span {
  color: #208eff;
  background: linear-gradient(90deg, #1f6bff 0%, #1ab88b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header strong {
  display: block;
  margin-top: 13px;
  color: #9aa5b5;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 269px);
  gap: 26px;
  justify-content: center;
  width: 1154px;
  max-width: 100%;
  margin-top: 76px;
}

.step-card {
  min-width: 0;
  width: 269px;
  height: 396px;
  padding: 40px 20px 28px;
  text-align: center;
  border: 1px solid #dfe7f2;
  border-radius: 12px;
  background: #ffffff;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}

.step-card:hover {
  border-color: rgba(18, 104, 255, 0.3);
  box-shadow: 0 18px 36px rgba(37, 99, 235, 0.12);
  transform: translateY(-4px);
}

.step-card img {
  display: block;
  width: 228px;
  height: 228px;
  margin: 0 auto;
  object-fit: contain;
}

.step-card h3 {
  margin: 18px 0 0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.step-card p {
  margin: 18px 0 0;
  color: #8b95a5;
  font-size: 12px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.tutorial-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 220px;
  height: 46px;
  margin-top: 34px;
  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(135deg, #1268ff 0%, #1677ff 100%);
  box-shadow:
    0 12px 24px rgba(18, 104, 255, 0.24),
    0 0 0 1px rgba(255, 255, 255, 0.12) inset;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease;
}

.tutorial-button img {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: transform 180ms ease;
}

.tutorial-button.is-highlighted {
  box-shadow:
    0 16px 28px rgba(18, 104, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.18) inset;
}

.tutorial-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 18px 32px rgba(18, 104, 255, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.tutorial-button:hover img {
  transform: translateX(1px);
}

@media (max-width: 1000px) {
  .quick-start-section {
    height: auto;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 269px);
  }
}

@media (max-width: 640px) {
  .quick-start-section {
    padding-right: 14px;
    padding-left: 14px;
  }

  .section-header h2 {
    font-size: 30px;
  }

  .section-header strong {
    font-size: 14px;
    line-height: 1.6;
  }

  .steps-grid {
    width: 100%;
    margin-top: 40px;
  }

  .step-card {
    width: 100%;
    max-width: 269px;
    height: auto;
    min-height: 360px;
    justify-self: center;
  }

  .steps-grid {
    grid-template-columns: minmax(0, 269px);
  }
}

@media (max-width: 360px) {
  .quick-start-section {
    padding-right: 12px;
    padding-left: 12px;
  }

  .step-card {
    max-width: 100%;
    min-height: 340px;
    padding: 32px 18px 24px;
  }

  .step-card img {
    width: min(210px, 100%);
    height: auto;
  }

  .tutorial-button {
    width: 100%;
  }
}
</style>
