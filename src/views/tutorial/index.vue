<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import aliyunModelUrl from '../../../assets/images/tutorial-aliyun-model.png'
import basicTranslationUrl from '../../../assets/images/tutorial-basic-translation.png'
import doubaoModelUrl from '../../../assets/images/tutorial-doubao-model.png'
import localModelUrl from '../../../assets/images/tutorial-local-model.png'
import ocrTranslationUrl from '../../../assets/images/tutorial-ocr-translation.png'
import subtitleWindowUrl from '../../../assets/images/tutorial-subtitle-window.png'
import menuIconUrl from '../../../assets/images/路径 2 (4).png'

const docxImages = import.meta.glob('../../../assets/images/tutorial-docx/*.png', {
  eager: true,
  import: 'default',
})

const getDocxImage = (name) => docxImages[`../../../assets/images/tutorial-docx/${name}`]

const tabs = [
  { label: '图文教程', value: 'text' },
  { label: '视频教程', value: 'video' },
]

const route = useRoute()
const activeTab = ref('text')
const activeGuide = ref('aliyun')
const activeTutorial = ref(null)
const activeImageIndex = ref(null)

const guides = [
  {
    id: 'aliyun',
    navLabel: '阿里云Api设置',
    title: '阿里云API配置向导',
    intro:
      '本教程将指导你如何在影优尽优同声传译中配置阿里云百炼大模型服务，并启用免费额度的同声传译体验。',
    steps: [
      {
        title: '注册登录阿里云',
        desc: '先在阿里云注册页面根据提示注册阿里云账号并完成实名认证，也可直接用支付宝登录。',
        images: ['image1.png'],
      },
      {
        title: '选择大模型',
        desc: '如图，任意点击一个模型，进入大模型界面。',
        images: ['image2.png'],
      },
      {
        title: '选择API Key',
        desc: '在大模型界面处点击左下角的 API Key。',
        images: ['image3.png'],
      },
      {
        title: '创建API Key',
        desc: '点击创建 API key，点击确定，即可免费获取 100 万 token 额度，且有效期为开始使用后的 90 天内。',
        images: ['image4.png', 'image5.png'],
      },
      {
        title: '复制API Key',
        desc: '点击刚创建出来的 API key 旁边的复制按钮。',
        images: ['image6.png'],
      },
      {
        title: '粘贴到软件设置',
        desc: '打开影优尽优同声传译程序，点击右上角菜单按钮进入设置中心，在 API 设置里选择阿里并粘贴 API Key。',
        images: ['image7.png', 'image8.png'],
      },
      {
        title: '查看额度与充值',
        desc: '阿里同声传译的收费标准和免费额度可在文档页面查看；免费额度用完后可自行在阿里云充值继续使用。',
        images: ['image9.png', 'image10.png'],
      },
    ],
  },
  {
    id: 'doubao',
    navLabel: '豆包Api设置',
    title: '豆包API设置向导',
    intro:
      '按照火山引擎控制台流程开通同声传译 2.0，并把 APPID 与 AccessToken 填写到软件设置中。',
    steps: [
      {
        title: '进入火山方舟',
        desc: '登录火山引擎账号，将鼠标放在大模型入口上，进入火山方舟大模型服务平台并点击控制台。',
        images: ['image11.png', 'image12.png'],
      },
      {
        title: '开通同声传译',
        desc: '同意授权后，在开通管理中找到同声传译 2.0，点击立即使用；该页面也可查看免费额度。',
        images: ['image13.png', 'image14.png'],
      },
      {
        title: '完成实名认证',
        desc: '如果账号尚未实名认证，请点击前往实名认证，并根据实际情况选择认证方式。',
        images: ['image15.png', 'image16.png'],
      },
      {
        title: '扫码验证身份',
        desc: '填写姓名与身份证信息并同意用户协议，使用微信或抖音扫描二维码完成人脸验证。',
        images: ['image17.png', 'image18.png'],
      },
      {
        title: '复制密钥到软件',
        desc: '认证完成后回到同声传译 2.0 页面，复制 APPID 和 AccessToken 到影优尽优同声传译的设置栏中。',
        images: ['image19.png', 'image20.png'],
      },
      {
        title: '查看费用中心',
        desc: '模型价格可在火山引擎文档查看，消耗的 token 会从费用中心扣除。',
        images: ['image21.png'],
      },
    ],
  },
  {
    id: 'local',
    navLabel: '本地模型设置向导',
    title: '本地模型设置向导',
    intro: '影优尽优同声传译自带本地翻译功能，需要先下载并放置本地模型文件。',
    steps: [
      {
        title: '下载并解压模型',
        desc: '安装软件后进入设置界面，AI 模型选择本地，点击“从网盘下载模型”，下载完成后将压缩包放入软件安装根目录并解压到当前文件夹。',
        images: ['image22.png'],
      },
    ],
  },
  {
    id: 'basic',
    navLabel: '软件基础使用说明',
    title: '软件基础使用说明',
    intro: '完成模型设置后，可在主界面选择输入输出设备、翻译语言、AI 朗读音色与字幕/OCR 辅助功能。',
    steps: [
      {
        title: '登录并选择设备',
        desc: '打开 app 后登录，在左侧选择麦克风和音响。耳机返听可用于测试麦克风，测试完成后建议关闭。',
        images: ['image23.png'],
      },
      {
        title: '选择AI模型',
        desc: '点击右上角菜单进入设置界面，选择要使用的 AI 模型；具体参数可查看远端 API 设置说明。',
        images: ['image24.png'],
      },
      {
        title: '开始同声传译',
        desc: '关闭设置后，在左下方设置 AI 朗读者音色和音量，并在顶部选择源语言与目标语言，点击开始即可运行同声传译任务。',
        images: ['image25.png'],
      },
      {
        title: '打开字幕与OCR',
        desc: '主界面右侧可通过对应按钮打开字幕弹窗和 OCR 实时翻译功能。',
        images: ['image26.png'],
      },
    ],
  },
  {
    id: 'ocr',
    navLabel: 'OCR软件使用说明',
    title: 'OCR软件使用说明',
    intro: 'OCR 窗口左侧为识别区域，右侧为识别结果区域，可拖动窗口和分隔条调整显示范围。',
    steps: [
      {
        title: '调整识别区域',
        desc: '从同声传译软件启动 OCR 后，拖动标题栏移动窗口，拖拽边缘调整窗口大小，中间区域也可左右拖动调整识别区和结果区比例。',
        images: ['image27.png'],
      },
      {
        title: '设置翻译显示',
        desc: '通过语言下拉菜单设置目标语言，点击暂停可冻结识别画面，双语/单语按钮可控制原文显示；滚轮可调整字体大小。',
        images: [],
      },
    ],
  },
  {
    id: 'subtitle',
    navLabel: '字幕软件使用说明',
    title: '字幕软件使用说明',
    intro: '字幕窗口支持拖拽调整位置和大小，也能切换双语/单语、透明背景、置顶和锁定状态。',
    steps: [
      {
        title: '调整字幕窗口',
        desc: '从同声传译软件启动字幕软件后，可以拖拽调整窗口位置和大小，并通过中间按钮开启或关闭原文显示。',
        images: ['image28.png'],
      },
      {
        title: '设置窗口状态',
        desc: '对应按钮可保持半透明黑色背景、置顶窗口，或锁定窗口大小与透明状态。',
        images: ['image29.png', 'image30.png'],
      },
      {
        title: '调整字幕颜色',
        desc: '在同声传译主体软件设置界面中，可调整字幕颜色、字体边框颜色；鼠标悬停在字幕窗口时滚动鼠标滚轮可调整字幕大小。',
        images: ['image31.png'],
      },
    ],
  },
]

const videoTutorials = [
  {
    image: aliyunModelUrl,
    title: '【第01课】如何配置阿里模型',
    desc: '阿里云Api设置向导——如何免费获取100万token额度',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/2d/28d0559e83c0d22293a94c33d31b69.mp4',
    accent: 'orange',
  },
  {
    image: doubaoModelUrl,
    title: '【第02课】如何配置豆包模型',
    desc: '豆包Api设置向导——如何领取免费额度',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/d7/a187cfd6f166ce1cee17505bea4f10.mp4',
    accent: 'violet',
  },
  {
    image: localModelUrl,
    title: '【第03课】如何配置本地模型',
    desc: '本地模型设置向导',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/6e/ad3743a4c09291cd72a95d51e487fe.mp4',
    accent: 'blue',
  },
  {
    image: basicTranslationUrl,
    title: '【第04课】软件基础使用方法和设置',
    desc: '影优尽优同声传译软件使用说明',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/9d/d9d7656ce99ecb29fad2a92b317608.mp4',
    accent: 'sky',
  },
  {
    image: ocrTranslationUrl,
    title: '【第05课】OCR功能',
    desc: 'OCR功能使用教程与使用场景',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/08/29dd1a49db3eb937ac89eb983dd36b.mp4',
    accent: 'green',
  },
  {
    image: subtitleWindowUrl,
    title: '【第06课】字幕窗口功能',
    desc: '字幕功能使用教程与使用场景',
    video: 'https://cdn.douyinggongchang.com/upload/sys/media/2d/905417c9714c4dbf7f9eadf30eda1f.mp4',
    accent: 'purple',
  },
]

const currentGuide = computed(() => guides.find((item) => item.id === activeGuide.value) ?? guides[0])
const currentGuideImages = computed(() =>
  currentGuide.value.steps.flatMap((step) =>
    step.images.map((image) => ({
      image,
      title: step.title,
    })),
  ),
)
const activeImage = computed(() =>
  activeImageIndex.value === null ? null : currentGuideImages.value[activeImageIndex.value],
)
const activeImageCounter = computed(() => {
  if (activeImageIndex.value === null) return ''

  return `${activeImageIndex.value + 1} / ${currentGuideImages.value.length}`
})

const iconImages = new Set(['image28.png', 'image29.png', 'image30.png'])
const isIconImage = (image) => iconImages.has(image)

const openGuideImage = (image) => {
  const nextIndex = currentGuideImages.value.findIndex((item) => item.image === image)
  activeImageIndex.value = nextIndex === -1 ? null : nextIndex
}

const closeImageViewer = () => {
  activeImageIndex.value = null
}

const showPrevImage = () => {
  const total = currentGuideImages.value.length

  if (!total || activeImageIndex.value === null) return
  activeImageIndex.value = (activeImageIndex.value - 1 + total) % total
}

const showNextImage = () => {
  const total = currentGuideImages.value.length

  if (!total || activeImageIndex.value === null) return
  activeImageIndex.value = (activeImageIndex.value + 1) % total
}

watch(
  () => route.query.type,
  (type) => {
    activeTab.value = type === 'video' ? 'video' : 'text'
  },
  { immediate: true },
)
</script>

<template>
  <main class="tutorial-page">
    <section class="tutorial-hero">
      <div class="decor decor--book" aria-hidden="true"></div>
      <div class="decor decor--play" aria-hidden="true"></div>

      <div class="tutorial-shell">
        <header class="tutorial-header">
          <h1>使用教程</h1>
          <p>图文教程与视频教程，帮助你快速上手影优尽优同声传译</p>

          <div class="tutorial-tabs" role="tablist" aria-label="教程类型">
            <button
              v-for="tab in tabs"
              :key="tab.value"
              class="tutorial-tab"
              :class="{ 'tutorial-tab--active': activeTab === tab.value }"
              type="button"
              role="tab"
              :aria-selected="activeTab === tab.value"
              @click="activeTab = tab.value"
            >
              {{ tab.label }}
            </button>
          </div>
        </header>

        <div v-if="activeTab === 'text'" class="guide-layout">
          <aside class="guide-sidebar" aria-label="教程目录">
            <h2>
              <img :src="menuIconUrl" alt="" />
              教程目录
            </h2>
            <button
              v-for="guide in guides"
              :key="guide.id"
              class="guide-nav-item"
              :class="{ 'guide-nav-item--active': activeGuide === guide.id }"
              type="button"
              @click="activeGuide = guide.id"
            >
              {{ guide.navLabel }}
            </button>
          </aside>

          <article class="guide-content">
            <header class="guide-content__header">
              <h2>{{ currentGuide.title }}</h2>
              <p>{{ currentGuide.intro }}</p>
            </header>

            <ol class="guide-steps">
              <li v-for="(step, index) in currentGuide.steps" :key="step.title" class="guide-step">
                <div class="guide-step__copy">
                  <span class="guide-step__num">{{ index + 1 }}</span>
                  <div>
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.desc }}</p>
                  </div>
                </div>

                <div
                  v-if="step.images.length"
                  class="guide-step__media"
                  :class="{ 'guide-step__media--split': step.images.length > 1 }"
                >
                  <figure
                    v-for="image in step.images"
                    :key="image"
                    :class="{ 'guide-step__figure--icon': isIconImage(image) }"
                  >
                    <button
                      class="guide-image-button"
                      type="button"
                      :aria-label="`放大查看${step.title}示意图`"
                      @click="openGuideImage(image)"
                    >
                      <img :src="getDocxImage(image)" :alt="`${step.title}示意图`" loading="lazy" />
                    </button>
                  </figure>
                </div>
              </li>
            </ol>
          </article>
        </div>

        <div v-else class="video-tutorial-frame">
          <div class="video-panel">
            <article
              v-for="item in videoTutorials"
              :key="item.title"
              class="tutorial-card"
              :class="`tutorial-card--${item.accent}`"
            >
              <button
                class="tutorial-link"
                type="button"
                :aria-label="item.title"
                @click="activeTutorial = item"
              >
                <figure class="tutorial-cover">
                  <img :src="item.image" :alt="item.title" />
                  <span class="play-button" aria-hidden="true"></span>
                </figure>

                <div class="tutorial-copy">
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.desc }}</p>
                </div>
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="activeTutorial"
        class="video-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="activeTutorial.title"
        @click.self="activeTutorial = null"
      >
        <div class="video-dialog">
          <button
            class="video-close"
            type="button"
            aria-label="关闭视频"
            @click="activeTutorial = null"
          ></button>
          <h2>{{ activeTutorial.title }}</h2>
          <video
            :key="activeTutorial.video"
            :src="activeTutorial.video"
            controls
            autoplay
            playsinline
          ></video>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <div
        v-if="activeImage"
        class="image-viewer"
        role="dialog"
        aria-modal="true"
        :aria-label="activeImage.title"
        @click.self="closeImageViewer"
      >
        <button class="image-viewer__close" type="button" aria-label="关闭图片" @click="closeImageViewer"></button>
        <button
          class="image-viewer__arrow image-viewer__arrow--prev"
          type="button"
          aria-label="上一张图片"
          :disabled="currentGuideImages.length <= 1"
          @click="showPrevImage"
        ></button>
        <figure class="image-viewer__stage">
          <img
            :class="{ 'image-viewer__img--icon': isIconImage(activeImage.image) }"
            :src="getDocxImage(activeImage.image)"
            :alt="`${activeImage.title}示意图`"
          />
          <figcaption>
            <span>{{ activeImage.title }}</span>
            <strong>{{ activeImageCounter }}</strong>
          </figcaption>
        </figure>
        <button
          class="image-viewer__arrow image-viewer__arrow--next"
          type="button"
          aria-label="下一张图片"
          :disabled="currentGuideImages.length <= 1"
          @click="showNextImage"
        ></button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.tutorial-page {
  min-height: 100vh;
  padding-top: 90px;
  color: #101828;
  background: #f3f7fc;
  overflow-x: clip;
}

@media (max-width: 900px) {
  .tutorial-page {
    padding-top: 72px;
  }
}

.tutorial-hero {
  position: relative;
  padding: 48px 24px 64px;
  overflow: clip;
  background: #f3f7fc;
}

.tutorial-hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 330px;
  background:
    radial-gradient(circle at 15% 8%, rgba(255, 255, 255, 0.96) 0 7%, transparent 22%),
    radial-gradient(circle at 91% 15%, rgba(169, 206, 255, 0.5) 0 8%, transparent 24%),
    linear-gradient(168deg, transparent 0 18%, rgba(255, 255, 255, 0.58) 18.2% 27%, transparent 27.2%),
    radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.98) 0 25%, transparent 57%),
    linear-gradient(180deg, #eff6ff 0%, #f8fbff 62%, rgba(243, 247, 252, 0) 100%);
  pointer-events: none;
}

.tutorial-hero::after {
  content: "";
  position: absolute;
  right: 0;
  top: 120px;
  width: 70%;
  height: 210px;
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 50%;
  box-shadow: -100px 64px 0 -42px rgba(255, 255, 255, 0.58);
  transform: rotate(-8deg);
  pointer-events: none;
}

.decor {
  position: absolute;
  pointer-events: none;
}

.decor--book {
  top: 24px;
  left: -2px;
  width: 270px;
  height: 190px;
  background:
    linear-gradient(29deg, transparent 0 16%, rgba(255, 255, 255, 0.95) 16.4% 43%, transparent 43.4%),
    linear-gradient(38deg, transparent 0 31%, rgba(93, 158, 245, 0.58) 31.4% 58%, transparent 58.4%),
    linear-gradient(19deg, transparent 0 26%, rgba(255, 255, 255, 0.9) 26.4% 51%, transparent 51.4%);
  filter: drop-shadow(0 24px 28px rgba(76, 137, 219, 0.15));
  opacity: 0.78;
  transform: rotate(-7deg);
}

.decor--play {
  top: 0;
  right: 55px;
  width: 245px;
  height: 178px;
  border: 24px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(125, 178, 246, 0.34), rgba(255, 255, 255, 0) 62%);
  box-shadow: 0 26px 48px rgba(72, 139, 235, 0.14);
  opacity: 0.72;
}

.decor--play::before {
  content: "";
  position: absolute;
  inset: 38px;
  border-radius: 50%;
  background: rgba(187, 216, 255, 0.38);
}

.decor--play::after {
  content: "";
  position: absolute;
  top: 76px;
  left: 96px;
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 28px solid #72aef8;
  filter: drop-shadow(0 8px 12px rgba(58, 130, 232, 0.25));
}

.tutorial-shell {
  position: relative;
  z-index: 1;
  width: 1154px;
  max-width: 100%;
  min-width: 0;
  margin: 0 auto;
}

.tutorial-header {
  text-align: center;
}

.tutorial-header h1 {
  margin: 0;
  color: #0f172a;
  font-size: 50px;
  font-weight: 900;
  line-height: 1.12;
  overflow-wrap: anywhere;
}

.tutorial-header p {
  width: min(100%, 760px);
  margin: 16px auto 0;
  color: #4a5568;
  font-size: 18px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.tutorial-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 430px;
  max-width: 100%;
  height: 55px;
  margin: 22px auto 0;
  padding: 3px;
  border: 1px solid #d8e6f8;
  border-radius: 999px;
  background: rgba(247, 251, 255, 0.78);
  box-shadow:
    0 8px 18px rgba(28, 101, 196, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.88);
}

.tutorial-tab {
  min-width: 0;
  border: 0;
  border-radius: 999px;
  color: #8a96a8;
  background: transparent;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition:
    color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.tutorial-tab--active {
  color: #1268ff;
  background: #ffffff;
  box-shadow:
    0 7px 16px rgba(18, 104, 255, 0.12),
    inset 0 0 0 1px rgba(18, 104, 255, 0.08);
}

.guide-layout {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 24px;
  margin: 28px auto 0;
  align-items: start;
  min-width: 0;
}

.guide-sidebar,
.guide-content,
.video-tutorial-frame {
  min-width: 0;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #dce7f6;
  box-shadow: 0 18px 44px rgba(70, 113, 163, 0.11);
  backdrop-filter: blur(12px);
}

.guide-sidebar {
  overflow: hidden;
  border-radius: 14px;
}

.guide-sidebar h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 64px;
  margin: 0;
  padding: 0 20px;
  color: #111827;
  font-size: 15px;
  font-weight: 800;
}

.guide-sidebar h2 img {
  width: 20px;
  height: 17px;
  object-fit: contain;
}

.guide-nav-item {
  position: relative;
  display: block;
  width: 100%;
  min-height: 55px;
  padding: 0 20px;
  border: 0;
  color: #2f3746;
  background: transparent;
  font-size: 14px;
  line-height: 1.45;
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition:
    color 180ms ease,
    background 180ms ease;
}

.guide-nav-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: transparent;
}

.guide-nav-item--active {
  color: #1268ff;
  background: #eef4ff;
}

.guide-nav-item--active::before {
  background: #1268ff;
}

.guide-content {
  overflow: hidden;
  border-radius: 18px;
}

.guide-content__header {
  padding: 28px 34px 18px;
  border-bottom: 1px solid #edf2f7;
}

.guide-content__header h2 {
  margin: 0;
  color: #111827;
  font-size: 22px;
  font-weight: 900;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.guide-content__header p {
  margin: 10px 0 0;
  color: #667085;
  font-size: 13px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.guide-steps {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0 34px 32px;
  list-style: none;
}

.guide-step {
  display: grid;
  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
  gap: 26px;
  min-width: 0;
  padding: 28px 0;
  border-bottom: 1px solid #e6edf6;
}

.guide-step:last-child {
  border-bottom: 0;
}

.guide-step__copy {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 12px;
  align-content: start;
}

.guide-step__num {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  border-radius: 50%;
  color: #ffffff;
  background: linear-gradient(180deg, #3c8cff, #1769ff);
  box-shadow: 0 7px 14px rgba(30, 105, 255, 0.2);
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

.guide-step h3 {
  margin: 0;
  color: #101828;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.guide-step p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.65;
  overflow-wrap: anywhere;
}

.guide-step__media {
  display: grid;
  gap: 16px;
  align-items: start;
}

.guide-step__media--split {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.guide-step__media figure {
  margin: 0;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #d7e2f0;
  border-radius: 10px;
  background: #f8fbff;
  box-shadow: 0 10px 22px rgba(69, 101, 138, 0.12);
}

.guide-image-button {
  appearance: none;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.guide-image-button img {
  display: block;
  width: 100%;
  height: auto;
}

.guide-step__figure--icon {
  width: 78px;
  justify-self: start;
  border-color: rgba(18, 104, 255, 0.14);
  border-radius: 8px;
  background: #050505;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);
}

.video-tutorial-frame {
  margin: 28px auto 0;
  padding: 20px;
  border-radius: 18px;
}

.video-panel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-width: 0;
}

.tutorial-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #dce6f4;
  border-radius: 10px;
  background: #ffffff;
  transition:
    box-shadow 180ms ease,
    transform 180ms ease,
    border-color 180ms ease;
}

.tutorial-card:hover {
  border-color: #3274ff;
  box-shadow: 0 14px 28px rgba(36, 104, 255, 0.14);
  transform: translateY(-2px);
}

.tutorial-link {
  appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 0 18px;
  border: 0;
  color: inherit;
  background: transparent;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}

.tutorial-link:focus,
.tutorial-link:focus-visible {
  outline: none;
}

.tutorial-cover {
  position: relative;
  aspect-ratio: 357 / 208;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: 9px 9px 0 0;
  background: #edf5ff;
}

.tutorial-cover img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.34);
  box-shadow: 0 9px 18px rgba(15, 23, 42, 0.18);
  transform: translate(-50%, -50%);
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.play-button::after {
  content: "";
  position: absolute;
  top: 12px;
  left: 16px;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 13px solid rgba(255, 255, 255, 0.92);
}

.tutorial-card:hover .play-button {
  background: rgba(18, 104, 255, 0.7);
  transform: translate(-50%, -50%) scale(1.04);
}

.tutorial-copy {
  padding: 0 16px;
}

.tutorial-copy h2 {
  margin: 18px 0 0;
  color: #111827;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.tutorial-copy p {
  margin: 7px 0 0;
  color: #8c97a8;
  font-size: 13px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.video-modal {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 32px;
  background: rgba(10, 18, 32, 0.68);
  backdrop-filter: blur(8px);
}

.video-dialog {
  position: relative;
  width: min(960px, 100%);
  min-width: 0;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.28);
}

.video-dialog h2 {
  margin: 0 44px 18px 0;
  color: #0f172a;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.video-dialog video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid #d7e2f0;
  border-radius: 8px;
  background: #0f172a;
}

.video-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 50%;
  background: #eef4ff;
  cursor: pointer;
}

.video-close::before,
.video-close::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 8px;
  width: 16px;
  height: 2px;
  border-radius: 999px;
  background: #1268ff;
}

.video-close::before {
  transform: rotate(45deg);
}

.video-close::after {
  transform: rotate(-45deg);
}

.image-viewer {
  position: fixed;
  inset: 0;
  z-index: 320;
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr) 76px;
  align-items: center;
  gap: 12px;
  padding: 56px 32px;
  background: rgba(8, 15, 28, 0.78);
  backdrop-filter: blur(10px);
}

.image-viewer__stage {
  display: grid;
  gap: 14px;
  place-items: center;
  min-width: 0;
  margin: 0;
}

.image-viewer__stage img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: calc(100vh - 150px);
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.38);
}

.image-viewer__stage .image-viewer__img--icon {
  width: 220px;
  max-width: min(220px, 54vw);
  padding: 26px;
  background: #050505;
}

.image-viewer__stage figcaption {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 100%;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  overflow-wrap: anywhere;
}

.image-viewer__stage figcaption strong {
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
}

.image-viewer__close,
.image-viewer__arrow {
  border: 0;
  background: rgba(255, 255, 255, 0.14);
  cursor: pointer;
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.image-viewer__close:hover,
.image-viewer__arrow:hover {
  background: rgba(255, 255, 255, 0.24);
}

.image-viewer__arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.image-viewer__arrow:disabled:hover {
  background: rgba(255, 255, 255, 0.14);
}

.image-viewer__close {
  position: absolute;
  top: 24px;
  right: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.image-viewer__close::before,
.image-viewer__close::after {
  content: "";
  position: absolute;
  top: 19px;
  left: 11px;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: #ffffff;
}

.image-viewer__close::before {
  transform: rotate(45deg);
}

.image-viewer__close::after {
  transform: rotate(-45deg);
}

.image-viewer__arrow {
  position: relative;
  width: 54px;
  height: 54px;
  justify-self: center;
  border-radius: 50%;
}

.image-viewer__arrow::before {
  content: "";
  position: absolute;
  top: 17px;
  width: 16px;
  height: 16px;
  border-top: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
}

.image-viewer__arrow--prev::before {
  left: 21px;
  transform: rotate(-45deg);
}

.image-viewer__arrow--next::before {
  right: 21px;
  transform: rotate(135deg);
}

@media (max-width: 960px) {
  .guide-layout {
    grid-template-columns: 1fr;
  }

  .guide-step {
    grid-template-columns: 1fr;
  }

  .video-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .decor--book {
    left: -96px;
  }

  .decor--play {
    right: -86px;
  }
}

@media (max-width: 620px) {
  .tutorial-hero {
    padding: 32px 14px 48px;
  }

  .decor--book,
  .decor--play {
    opacity: 0.38;
  }

  .decor--book {
    left: -156px;
  }

  .decor--play {
    right: -132px;
    width: 188px;
    height: 136px;
    border-width: 18px;
  }

  .tutorial-header h1 {
    font-size: 34px;
  }

  .tutorial-header p {
    width: min(320px, 100%);
    font-size: 14px;
  }

  .tutorial-tabs {
    width: 100%;
    max-width: 330px;
    height: 48px;
  }

  .tutorial-tab {
    font-size: 15px;
  }

  .guide-layout,
  .video-tutorial-frame {
    margin-top: 28px;
  }

  .guide-sidebar h2 {
    height: 54px;
    padding: 0 18px;
  }

  .guide-nav-item {
    min-height: 46px;
    padding-right: 18px;
    padding-left: 18px;
    font-size: 13px;
  }

  .guide-content__header,
  .guide-steps {
    padding-right: 18px;
    padding-left: 18px;
  }

  .guide-step {
    gap: 18px;
    padding: 22px 0;
  }

  .guide-step__copy {
    grid-template-columns: 26px minmax(0, 1fr);
    gap: 10px;
  }

  .video-tutorial-frame {
    padding: 14px;
  }

  .tutorial-copy h2 {
    font-size: 14px;
  }

  .guide-step__media--split,
  .video-panel {
    grid-template-columns: 1fr;
  }

  .video-modal {
    padding: 16px;
  }

  .video-dialog {
    padding: 18px;
  }

  .video-dialog h2 {
    font-size: 18px;
  }

  .image-viewer {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    padding: 52px 10px 28px;
  }

  .image-viewer__arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 40px;
    height: 40px;
    transform: translateY(-50%);
  }

  .image-viewer__arrow--prev {
    left: 8px;
  }

  .image-viewer__arrow--next {
    right: 8px;
  }

  .image-viewer__arrow::before {
    top: 13px;
    width: 13px;
    height: 13px;
  }

  .image-viewer__arrow--prev::before {
    left: 15px;
  }

  .image-viewer__arrow--next::before {
    right: 15px;
  }
}

@media (max-width: 360px) {
  .tutorial-hero {
    padding-right: 12px;
    padding-left: 12px;
  }

  .tutorial-header h1 {
    font-size: 31px;
  }

  .tutorial-tab {
    font-size: 14px;
  }

  .guide-content__header,
  .guide-steps {
    padding-right: 16px;
    padding-left: 16px;
  }

  .video-tutorial-frame {
    padding: 10px;
  }

  .video-dialog {
    padding: 16px;
  }

  .image-viewer__stage img {
    max-height: calc(100vh - 170px);
  }
}
</style>
