<script setup>
import bgUrl from '../../../../assets/images/cta-bg.png'
import downloadIconUrl from '../../../../assets/images/icon-download-client-cta.png'
import { useDownloadClient } from '../../../composables/useDownloadClient'

const { downloadStatus, downloadStatusType, handleDownloadClient, isDownloading } = useDownloadClient()
</script>

<template>
  <section class="cta-section" :style="{ backgroundImage: `url(${bgUrl})` }">
    <div class="cta-content">
      <h2>同声传译在手，跨境沟通无忧</h2>
      <p>告别语言障碍，让沟通更简单高效</p>
      <a
        href="#"
        :class="{ 'is-loading': isDownloading }"
        :aria-disabled="isDownloading"
        @click.prevent="handleDownloadClient"
      >
        <img :src="downloadIconUrl" alt="" aria-hidden="true" />
        下载客户端
      </a>
      <p
        v-if="downloadStatus"
        class="download-status"
        :class="`download-status--${downloadStatusType}`"
        role="status"
      >
        {{ downloadStatus }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1920 / 490;
  min-height: 260px;
  overflow: hidden;
  background-color: #0759e9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1154px;
  padding: 0 24px;
  margin: 0 auto;
  color: #ffffff;
  text-align: center;
}

.cta-content h2 {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  color: #ffffff;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.15;
  overflow-wrap: anywhere;
}

.cta-content p {
  width: 100%;
  max-width: 760px;
  margin: 18px auto 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 28px;
  line-height: 1;
  overflow-wrap: anywhere;
}

.cta-content a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 207px;
  height: 60px;
  margin-top: 36px;
  border-radius: 6px;
  color: #1268ff;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(7, 42, 128, 0.18);
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
}

.cta-content a.is-loading {
  cursor: wait;
  opacity: 0.72;
  pointer-events: none;
}

.cta-content a img {
  display: block;
  width: 25px;
  height: 25px;
  object-fit: contain;
}

.cta-content .download-status {
  min-height: 24px;
  margin: 13px 0 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
  line-height: 1.5;
}

.cta-content .download-status--success {
  color: #c7ffe9;
}

.cta-content .download-status--error {
  color: #ffe0e0;
}

@media (max-width: 960px) {
  .cta-content h2 {
    font-size: 40px;
  }

  .cta-content p {
    font-size: 22px;
  }
}

@media (max-width: 640px) {
  .cta-section {
    min-height: 220px;
    padding: 34px 14px;
    aspect-ratio: auto;
    background-size: cover;
  }

  .cta-content h2 {
    font-size: 28px;
    line-height: 1.25;
  }

  .cta-content p {
    font-size: 16px;
    line-height: 1.5;
  }

  .cta-content a {
    width: min(207px, 100%);
    height: 50px;
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  .cta-content h2 {
    font-size: 25px;
  }

  .cta-content a {
    font-size: 17px;
  }
}
</style>
