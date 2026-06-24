<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import academicForumUrl from '../../../../assets/images/scenario-academic-forum.png'
import businessMeetingUrl from '../../../../assets/images/scenario-business-meeting.png'
import governmentDiplomacyUrl from '../../../../assets/images/scenario-government-diplomacy.png'
import legalConsultingUrl from '../../../../assets/images/scenario-legal-consulting.png'
import liveStreamingUrl from '../../../../assets/images/scenario-live-streaming.png'
import medicalConsultationUrl from '../../../../assets/images/scenario-medical-consultation.png'
import onlineEducationUrl from '../../../../assets/images/scenario-online-education.png'
import travelAssistantUrl from '../../../../assets/images/scenario-travel-assistant.png'

const scenarioGridRef = ref(null)
const isScenariosVisible = ref(false)
let scenarioObserver = null

const scenarios = [
  {
    image: businessMeetingUrl,
    title: '国际商务会议',
    desc: '跨国谈判、外贸会议、视频沟通，专业商务词汇精准翻译',
  },
  {
    image: academicForumUrl,
    title: '学术论坛讲座',
    desc: '国际学术会议、公开课讲座，专业术语数据库权威保障',
  },
  {
    image: liveStreamingUrl,
    title: '媒体直播字幕',
    desc: '媒体机构、内容创作者，触达全球不同语言受众',
  },
  {
    image: medicalConsultationUrl,
    title: '医疗问诊翻译',
    desc: '医疗机构跨语问诊，专业医学术语精准传达',
  },
  {
    image: legalConsultingUrl,
    title: '法律仲裁咨询',
    desc: '涉外法律咨询、仲裁庭审，保留专业严谨度',
  },
  {
    image: travelAssistantUrl,
    title: '出境旅游助手',
    desc: '出境旅行、商务出行，实时翻译解决语言障碍',
  },
  {
    image: governmentDiplomacyUrl,
    title: '政务对外交',
    desc: '外事接待、对外交涉场景，权威准确的翻译支持',
  },
  {
    image: onlineEducationUrl,
    title: '在线教育学习',
    desc: '国际网课、跨语言学习，沉浸式语言学习环境',
  },
]

onMounted(() => {
  scenarioObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      isScenariosVisible.value = true
      scenarioObserver?.disconnect()
    },
    {
      threshold: 0.18,
    },
  )

  if (scenarioGridRef.value) {
    scenarioObserver.observe(scenarioGridRef.value)
  }
})

onBeforeUnmount(() => {
  scenarioObserver?.disconnect()
})
</script>

<template>
  <section id="scenarios" class="scenarios-section">
    <div class="section-header">
      <p>适用场景</p>
      <h2>
        各类跨语言场景，都能<span>从容应对</span>
      </h2>
      <strong>覆盖商务、学术、直播、日常等多场景，为每一次跨语言交流提供可靠支持</strong>
    </div>

    <div
      ref="scenarioGridRef"
      class="scenarios-grid"
      :class="{ 'is-visible': isScenariosVisible }"
    >
      <article
        v-for="(item, index) in scenarios"
        :key="item.title"
        class="scenario-card"
        :style="{ '--scenario-index': index }"
      >
        <div class="scenario-image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="scenario-body">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.scenarios-section {
  min-height: 839px;
  padding: 42px 24px 64px;
  background: #f7f9fc;
  overflow: hidden;
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

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 26px 24px;
  justify-content: center;
  width: 1154px;
  max-width: 100%;
  margin: 48px auto 0;
}

.scenario-card {
  position: relative;
  min-width: 0;
  width: 270px;
  height: 291px;
  overflow: hidden;
  border: 1px solid #e7edf6;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  opacity: 0;
  translate: 0 34px;
  scale: 0.96;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 260ms ease;
  will-change: transform, opacity;
}

.scenario-card::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background: linear-gradient(135deg, rgba(18, 104, 255, 0.14), transparent 42%);
  opacity: 0;
  transition: opacity 260ms ease;
}

.scenarios-grid.is-visible .scenario-card {
  animation: scenario-card-in 680ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: calc(var(--scenario-index) * 70ms);
}

.scenario-card:hover {
  border-color: rgba(18, 104, 255, 0.28);
  box-shadow: 0 18px 36px rgba(37, 99, 235, 0.14);
  transform: translateY(-8px) scale(1.02);
}

.scenario-card:hover::after {
  opacity: 1;
}

.scenario-image {
  width: 250px;
  height: 180px;
  margin: 12px auto 0;
  overflow: hidden;
  border-radius: 6px;
  background: #eef4ff;
}

.scenario-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.scenario-card:hover .scenario-image img {
  transform: scale(1.08);
}

.scenario-body {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  gap: 14px;
  padding: 18px 18px 20px;
}

.scenario-body > div {
  min-width: 0;
}

.scenario-body span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: #ffffff;
  background: #4169e1;
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.scenario-body h3 {
  margin: 0;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.scenario-body p {
  margin: 8px 0 0;
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

@keyframes scenario-card-in {
  0% {
    opacity: 0;
    translate: 0 34px;
    scale: 0.96;
  }

  58% {
    opacity: 1;
    translate: 0 -6px;
    scale: 1.015;
  }

  100% {
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scenario-card,
  .scenarios-grid.is-visible .scenario-card,
  .scenario-image img {
    animation: none;
    opacity: 1;
    transform: none;
    translate: none;
    scale: none;
    transition: none;
  }
}

@media (max-width: 1180px) {
  .scenarios-section {
    height: auto;
  }

  .scenarios-grid {
    grid-template-columns: repeat(2, 270px);
  }
}

@media (max-width: 640px) {
  .scenarios-section {
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

  .scenarios-grid {
    width: 100%;
    gap: 18px;
  }

  .scenarios-grid {
    grid-template-columns: minmax(0, 270px);
  }

  .scenario-card {
    width: 100%;
  }

  .scenario-image {
    width: calc(100% - 20px);
  }
}

@media (max-width: 360px) {
  .scenarios-section {
    padding-right: 12px;
    padding-left: 12px;
  }

  .scenarios-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .scenario-body {
    gap: 12px;
    padding-right: 14px;
    padding-left: 14px;
  }
}
</style>
