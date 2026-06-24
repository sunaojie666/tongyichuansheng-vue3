<script setup>
import statAccuracyUrl from '../../../../assets/images/stat-accuracy.png'
import statDelayUrl from '../../../../assets/images/stat-delay.png'
import statLanguageUrl from '../../../../assets/images/stat-language.png'
import statUsersUrl from '../../../../assets/images/stat-users.png'

const stats = [
  {
    icon: statLanguageUrl,
    value: '60+',
    title: '支持语言',
    desc: '覆盖全球主流语言',
    tone: 'blue',
  },
  {
    icon: statDelayUrl,
    value: '<200',
    unit: 'ms',
    title: '超低延迟',
    desc: '行业领先的实时翻译速度',
    tone: 'green',
  },
  {
    icon: statAccuracyUrl,
    value: '97.5%',
    title: '高准确率',
    desc: '语言识别准确率高达',
    tone: 'purple',
  },
  {
    icon: statUsersUrl,
    value: '30万+',
    title: '全球用户',
    desc: '每个用户的信赖之选',
    tone: 'orange',
  },
]
</script>

<template>
  <div class="stats-wrap">
    <div class="stats-grid">
      <article v-for="item in stats" :key="item.title" class="stat-card">
        <span class="stat-icon" :class="`stat-icon--${item.tone}`">
          <img :src="item.icon" alt="" />
        </span>
        <div>
          <p class="stat-value">
            {{ item.value }}<em v-if="item.unit">{{ item.unit }}</em>
          </p>
          <p class="stat-title">{{ item.title }}</p>
          <p class="stat-desc">{{ item.desc }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.stats-wrap {
  width: 1154px;
  max-width: 100%;
  margin: 47px auto 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 273px);
  gap: 24px;
  justify-content: space-between;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 22px;
  width: 273px;
  height: 132px;
  padding: 0 28px;
  border: 1px solid rgba(188, 207, 238, 0.85);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 18px rgba(26, 80, 151, 0.12);
}

.stat-card > div {
  min-width: 0;
}

.stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 58px;
  height: 58px;
  border-radius: 999px;
}

.stat-icon img {
  display: block;
  width: 32px;
  height: 28px;
  object-fit: contain;
}

.stat-icon--blue {
  background: #dcecff;
}

.stat-icon--green {
  background: #dbf9ed;
}

.stat-icon--purple {
  background: #eee5ff;
}

.stat-icon--orange {
  background: #fff0df;
}

.stat-value {
  margin: 0;
  color: #020617;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
}

.stat-value em {
  color: #24c986;
  font-size: 24px;
  font-style: normal;
}

.stat-title {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.35;
}

.stat-desc {
  margin: 8px 0 0;
  color: #7b8796;
  font-size: 14px;
  line-height: 1.35;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    justify-content: stretch;
  }

  .stat-card {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .stat-card {
    gap: 18px;
    height: auto;
    min-height: 116px;
    padding: 22px 24px;
  }
}

@media (max-width: 360px) {
  .stat-card {
    gap: 14px;
    padding: 20px 18px;
  }

  .stat-icon {
    width: 52px;
    height: 52px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-value em {
    font-size: 20px;
  }
}
</style>
