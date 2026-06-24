<script setup>
import quoteIconUrl from '../../../../assets/images/testimonial-quote-icon.png'
import quoteMarkUrl from '../../../../assets/images/testimonial-quote-mark.png'
import starLargeUrl from '../../../../assets/images/testimonial-star-large.png'
import starSmallUrl from '../../../../assets/images/testimonial-star-small.png'
import bgUrl from '../../../../assets/images/testimonials-bg.png'

const testimonials = [
  {
    name: '张先生',
    role: '某外贸公司销售总监',
    avatar: '张',
    tone: 'blue',
    text: '我们公司每周都要和海外客户开视频会议，用了同声传译助手之后，沟通效率直接翻倍，再也不用等翻译来回传话，也不用担心理解偏差，合作推进快了很多。',
  },
  {
    name: '李博士',
    role: '某高校副教授',
    avatar: '李',
    tone: 'purple',
    text: '参加国际学术会议和线上研讨时，实时字幕帮了大忙。翻译速度快、专业术语准确率高，连细分领域的词汇都处理得很到位，完全不担心听不懂或跟不上讨论节奏。',
    featured: true,
  },
  {
    name: '王小姐',
    role: '某平台主播',
    avatar: '王',
    tone: 'cyan',
    text: '界面简洁，设置也很省心。我主要用来做跨境直播辅助翻译，稳定性很强，低延迟的体验让对话衔接很自然，同行问起我都会直接推荐。',
  },
]
</script>

<template>
  <section id="testimonials" class="testimonials-section" :style="{ backgroundImage: `url(${bgUrl})` }">
    <div class="section-header">
      <p>用户评价</p>
      <h2>
        他们都在使用<span>影优尽优</span>
      </h2>
      <strong>来自各行业 30 万+ 用户的真实反馈</strong>
    </div>

    <div class="testimonials-grid">
      <article
        v-for="item in testimonials"
        :key="item.name"
        class="testimonial-card"
        :class="{ 'testimonial-card--featured': item.featured }"
      >
        <span
          v-if="item.featured"
          class="quote-badge"
          aria-hidden="true"
        >
          <img class="quote-badge__flag" :src="quoteIconUrl" alt="" />
          <img class="quote-badge__mark" :src="quoteMarkUrl" alt="" />
        </span>

        <div class="stars" aria-label="五星评价">
          <img
            v-for="starIndex in 5"
            :key="starIndex"
            :src="item.featured ? starLargeUrl : starSmallUrl"
            alt=""
            aria-hidden="true"
          />
        </div>

        <p class="testimonial-text">{{ item.text }}</p>

        <div class="author">
          <span class="avatar" :class="`avatar--${item.tone}`">{{ item.avatar }}</span>
          <div>
            <strong>{{ item.name }}</strong>
            <p>{{ item.role }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  height: 693px;
  padding: 84px 24px 80px;
  overflow: hidden;
  background-color: #f6f9ff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: 345px 405px 345px;
  align-items: center;
  justify-content: center;
  gap: 29px;
  width: 1154px;
  max-width: 100%;
  margin: 42px auto 0;
}

.testimonial-card {
  position: relative;
  min-width: 0;
  width: 100%;
  height: 354px;
  padding: 42px 34px 28px;
  overflow: visible;
  border: 1px solid #d9e4f4;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 16px 34px rgba(37, 99, 235, 0.06);
  transition:
    border-color 320ms ease,
    background-color 320ms ease,
    box-shadow 320ms ease,
    transform 320ms ease;
  will-change: transform;
  cursor: pointer;
}

.testimonial-card:hover {
  border-color: rgba(18, 104, 255, 0.26);
  box-shadow: 0 20px 42px rgba(37, 99, 235, 0.1);
  transform: translateY(-6px);
}

.testimonial-card--featured {
  height: 379px;
  padding: 48px 42px 32px;
  border-color: rgba(49, 112, 255, 0.24);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.testimonial-card--featured:hover {
  border-color: rgba(18, 104, 255, 0.3);
  box-shadow: 0 22px 44px rgba(37, 99, 235, 0.12);
  transform: translateY(-6px);
}

.quote-badge {
  position: absolute;
  top: -6px;
  right: 38px;
  z-index: 2;
  width: 32px;
  height: 42px;
  pointer-events: none;
  transition: opacity 260ms ease;
}

.quote-badge__flag {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.quote-badge__mark {
  position: absolute;
  top: 11px;
  left: 50%;
  width: 18px;
  height: 17px;
  object-fit: contain;
  transform: translateX(-50%);
}

.stars {
  display: flex;
  gap: 7px;
  line-height: 1;
}

.stars img {
  display: block;
  width: 18px;
  height: 18px;
  object-fit: contain;
  transition:
    width 320ms ease,
    height 320ms ease;
}

.testimonial-card--featured .stars img {
  width: 24px;
  height: 24px;
}

.testimonial-text {
  margin: 20px 0 0;
  color: #2f3746;
  font-size: 16px;
  line-height: 1.82;
  overflow-wrap: anywhere;
  transition:
    font-size 320ms ease,
    line-height 320ms ease;
}

.testimonial-card--featured .testimonial-text {
  font-size: 20px;
  line-height: 1.68;
}

.author {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 15px;
  margin-top: 30px;
}

.author > div {
  min-width: 0;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  transition:
    width 320ms ease,
    height 320ms ease,
    font-size 320ms ease;
}

.testimonial-card--featured .avatar {
  width: 60px;
  height: 60px;
  font-size: 20px;
}

.avatar--blue {
  background: #0ea5e9;
}

.avatar--purple {
  background: linear-gradient(135deg, #5b7cff 0%, #9b4dff 100%);
}

.avatar--cyan {
  background: #06a9d7;
}

.author strong {
  color: rgba(56, 56, 56, 1);
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
  transition: font-size 320ms ease;
}

.author p {
  margin: 8px 0 0;
  color: #8b95a5;
  font-size: 16px;
  line-height: 1;
  overflow-wrap: anywhere;
  transition: font-size 320ms ease;
}

@media (max-width: 960px) {
  .testimonials-section {
    height: auto;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    width: min(420px, 100%);
  }

  .testimonial-card,
  .testimonial-card--featured {
    height: auto;
  }
}

@media (max-width: 640px) {
  .testimonials-section {
    padding: 54px 14px 58px;
  }

  .section-header h2 {
    font-size: 30px;
  }

  .section-header strong {
    font-size: 14px;
    line-height: 1.6;
  }

  .testimonials-grid {
    width: 100%;
    gap: 18px;
    margin-top: 34px;
  }

  .testimonial-card,
  .testimonial-card--featured {
    padding: 32px 22px 26px;
  }

  .testimonial-card--featured .stars img {
    width: 20px;
    height: 20px;
  }

  .testimonial-text,
  .testimonial-card--featured .testimonial-text {
    font-size: 14px;
    line-height: 1.75;
  }

  .author {
    margin-top: 24px;
  }

  .avatar,
  .testimonial-card--featured .avatar {
    width: 46px;
    height: 46px;
    font-size: 16px;
  }

  .author strong {
    font-size: 16px;
  }

  .author p {
    font-size: 13px;
    line-height: 1.35;
  }
}

@media (max-width: 360px) {
  .testimonials-section {
    padding-right: 12px;
    padding-left: 12px;
  }

  .testimonial-card,
  .testimonial-card--featured {
    padding-right: 18px;
    padding-left: 18px;
  }
}
</style>
