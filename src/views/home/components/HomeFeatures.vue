<script setup>
import { ref } from 'vue'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import featureFloatUrl from '../../../../assets/images/feature-floating-subtitle.png'
import featureLinkArrowRightUrl from '../../../../assets/images/feature-link-arrow-right.png'
import featureOcrUrl from '../../../../assets/images/feature-ocr.png'
import featureTranslateUrl from '../../../../assets/images/feature-translate.png'

const sharedFeaturePoints = [
  '支持中英日韩法德西俄等60+主流语言',
  '多语言混合场景自动识别',
  '毫秒级响应，同声传译零感知延迟',
]

const activeFeatureIndex = ref(0)
const featureSwiperModules = [Mousewheel]
const featureMousewheelOptions = {
  eventsTarget: '.feature-section',
  forceToAxis: true,
  releaseOnEdges: true,
  sensitivity: 1,
  thresholdDelta: 8,
}
const featureSwiperBreakpoints = {
  0: {
    enabled: false,
  },
  901: {
    enabled: true,
  },
}

const features = [
  {
    image: featureTranslateUrl,
    eyebrow: 'Real-time AI Interpretation',
    metric: '< 200ms',
    metricLabel: '低延迟响应',
    title: '实时同声传译・跨语言零障碍沟通',
    desc: '覆盖英、中、日、韩、法、德、西、俄、阿拉伯等全球主流语言，端到端翻译效果流畅自然，真正做到沟通无感。延迟低于200ms。',
    points: sharedFeaturePoints,
  },
  {
    image: featureOcrUrl,
    eyebrow: 'OCR Recognition',
    metric: '60+',
    metricLabel: '主流语言覆盖',
    title: 'OCR 字幕识别・弹幕内容一键转译',
    desc: '精准识别直播中的字幕、弹幕内容，通过 OCR 引擎提取后实时转译为目标语言。支持多行文字同时抓取，中英文混合弹幕无压力。',
    points: sharedFeaturePoints,
  },
  {
    image: featureFloatUrl,
    eyebrow: 'Floating Subtitle',
    metric: 'PiP',
    metricLabel: '悬浮字幕窗口',
    title: '悬浮字幕窗口・直播间始终可见可调',
    desc: '将翻译结果以悬浮窗口形式叠加在直播画面上方，支持自由拖拽位置与字号大小。画中画模式不遮挡主播画面，观众边看直播边看翻译，体验丝滑不中断。',
    points: [
      '浮窗置顶显示，支持拖拽任意位置',
      '字号、气泡样式自由调节，适配不同场景',
      '画中画模式，不遮挡直播主画面内容',
    ],
  },
]

const syncFeatureIndex = (swiper) => {
  activeFeatureIndex.value = swiper.activeIndex
}
</script>

<template>
  <section id="features" class="feature-section">
    <div class="feature-sticky">
      <div class="section-header">
        <p>核心功能</p>
        <h2>
          让跨语言沟通变得<span>前所未有</span>的简单
        </h2>
        <strong>基于深度神经网络的实时同声传译引擎，重新定义跨语言沟通体验</strong>
      </div>

      <div class="feature-showcase">
        <div class="feature-media-column" aria-hidden="true">
          <div class="feature-media-stage">
            <figure
              v-for="(feature, index) in features"
              :key="feature.title"
              class="feature-media-frame"
              :class="{ 'is-active': activeFeatureIndex === index }"
            >
              <img :src="feature.image" :alt="feature.title" loading="lazy" />
            </figure>

            <div class="feature-media-status">
              <span>{{ String(activeFeatureIndex + 1).padStart(2, '0') }}</span>
              <strong>{{ features[activeFeatureIndex].metric }}</strong>
              <em>{{ features[activeFeatureIndex].metricLabel }}</em>
            </div>
          </div>
        </div>

        <Swiper
          class="feature-content feature-content--desktop"
          direction="vertical"
          :modules="featureSwiperModules"
          :mousewheel="featureMousewheelOptions"
          :breakpoints="featureSwiperBreakpoints"
          :slides-per-view="1"
          :speed="520"
          @swiper="syncFeatureIndex"
          @slideChange="syncFeatureIndex"
        >
          <SwiperSlide
            v-for="(feature, index) in features"
            :key="feature.title"
            class="feature-content-section"
            :class="{ 'is-active': activeFeatureIndex === index }"
          >
            <figure class="feature-inline-visual">
              <img :src="feature.image" :alt="feature.title" loading="lazy" />
            </figure>

            <div class="feature-copy">
              <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <p class="feature-eyebrow">{{ feature.eyebrow }}</p>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>

              <ul>
                <li v-for="point in feature.points" :key="point">{{ point }}</li>
              </ul>

              <RouterLink to="/tutorial">
                查看使用教程
                <img :src="featureLinkArrowRightUrl" alt="" aria-hidden="true" />
              </RouterLink>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="feature-content feature-content--mobile">
          <article
            v-for="(feature, index) in features"
            :key="feature.title"
            class="feature-content-section"
          >
            <figure class="feature-inline-visual">
              <img :src="feature.image" :alt="feature.title" loading="lazy" />
            </figure>

            <div class="feature-copy">
              <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <p class="feature-eyebrow">{{ feature.eyebrow }}</p>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>

              <ul>
                <li v-for="point in feature.points" :key="point">{{ point }}</li>
              </ul>

              <RouterLink to="/tutorial">
                查看使用教程
                <img :src="featureLinkArrowRightUrl" alt="" aria-hidden="true" />
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-section {
  padding: 42px 24px 64px;
  background: #ffffff;
  overflow: visible;
}

.feature-sticky {
  position: relative;
}

.section-header {
  width: 1154px;
  max-width: 100%;
  margin: 0 auto;
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

.feature-showcase {
  display: grid;
  grid-template-columns: 668px minmax(0, 1fr);
  align-items: start;
  gap: 64px;
  width: 1154px;
  max-width: 100%;
  height: 489px;
  margin: 44px auto 0;
  overflow: hidden;
}

.feature-media-column {
  min-width: 0;
  width: 668px;
  max-width: 100%;
}

.feature-media-stage {
  position: relative;
  width: 668px;
  max-width: 100%;
  height: 489px;
  margin: 0;
  overflow: hidden;
  border-radius: 15px;
  background:
    radial-gradient(circle at 18% 18%, rgba(34, 190, 134, 0.22), transparent 32%),
    linear-gradient(135deg, #eef5ff 0%, #f7fbff 58%, #ecfff7 100%);
  box-shadow: 0 24px 54px rgba(37, 99, 235, 0.14);
}

.feature-media-frame {
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  transform: scale(1.04);
  transition:
    opacity 320ms ease,
    transform 640ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.feature-media-frame.is-active {
  z-index: 1;
  opacity: 1;
  transform: scale(1);
}

.feature-media-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-media-status {
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 2;
  display: none;
  grid-template-columns: auto auto;
  align-items: end;
  gap: 2px 12px;
  min-width: 190px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 8px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(16px);
}

.feature-media-status span {
  grid-row: 1 / span 2;
  align-self: center;
  color: #1268ff;
  font-size: 15px;
  font-weight: 800;
}

.feature-media-status strong {
  font-size: 30px;
  line-height: 1;
}

.feature-media-status em {
  color: #64748b;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
}

.feature-content {
  position: relative;
  min-width: 0;
  width: 100%;
  max-width: 422px;
  height: 489px;
}

.feature-content--desktop {
  overflow: hidden;
}

.feature-content--desktop :deep(.swiper-wrapper),
.feature-content--desktop :deep(.swiper-slide) {
  height: 100% !important;
}

.feature-content--mobile {
  display: none;
}

.feature-content-section {
  display: flex;
  align-items: center;
  min-width: 0;
  height: 100%;
  padding: 0;
  opacity: 1;
}

.feature-content-section:last-child {
  padding-bottom: 0;
}

.feature-content-section.is-active {
  pointer-events: auto;
}

.feature-inline-visual {
  display: none;
}

.feature-copy {
  position: relative;
  min-width: 0;
  width: 100%;
  padding: 0;
}

.feature-copy::before {
  display: none;
  content: "";
  position: absolute;
  top: 34px;
  bottom: 34px;
  left: 0;
  width: 3px;
  border-radius: 999px;
  background: #dbeafe;
}

.feature-content-section.is-active .feature-copy::before {
  background: linear-gradient(180deg, #1268ff 0%, #22be86 100%);
}

.feature-index {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 22px;
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(135deg, #1268ff 0%, #22be86 100%);
  box-shadow: 0 12px 24px rgba(18, 104, 255, 0.22);
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.feature-eyebrow {
  display: none;
  margin: 0 0 12px;
  color: #1268ff;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
}

.feature-copy h3 {
  margin: 0;
  color: #0f172a;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.35;
  word-break: normal;
  overflow-wrap: anywhere;
}

.feature-copy > p:not(.feature-eyebrow) {
  margin: 14px 0 0;
  color: #334155;
  font-size: 16px;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.feature-copy ul {
  display: grid;
  gap: 18px;
  margin: 38px 0 0;
  padding: 0;
  list-style: none;
}

.feature-copy li {
  position: relative;
  padding-left: 14px;
  color: #334155;
  font-size: 16px;
  line-height: 1.55;
}

.feature-copy li::before {
  content: "";
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #1268ff;
}

.feature-copy a {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  gap: 8px;
  margin-top: 24px;
  color: #1268ff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}

.feature-copy a img {
  display: block;
  width: 18px;
  height: auto;
}

@media (max-width: 1100px) {
  .feature-section {
    padding-bottom: 64px;
  }

  .feature-showcase {
    grid-template-columns: minmax(0, 58%) minmax(0, 1fr);
    gap: 40px;
    width: 100%;
    height: auto;
    margin-top: 48px;
    overflow: visible;
  }

  .feature-media-column,
  .feature-media-stage {
    width: 100%;
  }

  .feature-media-stage {
    height: auto;
    aspect-ratio: 668 / 489;
  }

  .feature-content {
    max-width: none;
  }
}

@media (max-width: 900px) {
  .feature-section {
    height: auto;
    padding: 42px 24px 64px;
  }

  .feature-sticky {
    position: static;
    display: block;
    min-height: 0;
    padding: 0;
  }

  .feature-showcase {
    display: block;
    min-height: 0;
    overflow: visible;
  }

  .feature-media-column {
    display: none;
  }

  .feature-content {
    position: static;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    height: auto;
    max-width: 960px;
    margin: 0 auto;
    gap: 24px;
  }

  .feature-content--desktop {
    display: none;
  }

  .feature-content--mobile {
    display: grid;
  }

  .feature-content-section {
    position: static;
    inset: auto;
    display: block;
    height: auto;
    min-height: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #dce7f6;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.1);
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  .feature-content-section:last-child {
    padding-bottom: 0;
  }

  .feature-inline-visual {
    display: block;
    height: auto;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    aspect-ratio: 668 / 489;
    background: #eef5ff;
  }

  .feature-inline-visual img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .feature-copy {
    display: block;
    padding: 20px;
  }

  .feature-copy::before,
  .feature-eyebrow {
    display: none;
  }

  .feature-index {
    width: 36px;
    height: 36px;
    margin-bottom: 14px;
    font-size: 14px;
  }

  .feature-copy h3 {
    font-size: 19px;
    line-height: 1.45;
  }

  .feature-copy > p:not(.feature-eyebrow) {
    font-size: 14px;
    line-height: 1.7;
  }
}

@media (max-width: 640px) {
  .feature-section {
    padding: 52px 14px 54px;
  }

  .section-header h2 {
    font-size: 30px;
  }

  .section-header strong {
    font-size: 14px;
  }

  .feature-showcase {
    margin-top: 32px;
  }

  .feature-content {
    grid-template-columns: 1fr;
    gap: 18px;
    max-width: 420px;
  }

  .feature-copy {
    padding: 18px;
  }

  .feature-copy h3 {
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  .feature-section {
    padding-right: 12px;
    padding-left: 12px;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .feature-copy {
    padding: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .feature-media-frame,
  .feature-content-section {
    transition: none;
  }
}
</style>
