import { ref } from 'vue'
import { downloadClient } from '../utils/downloadClient'

const statusText = {
  loading: '正在准备下载...',
  success: '已开始下载，请在浏览器下载列表查看。',
  error: '下载失败，请稍后重试。',
}

export const useDownloadClient = () => {
  const isDownloading = ref(false)
  const downloadStatus = ref('')
  const downloadStatusType = ref('')
  let statusTimer = 0

  const clearStatusLater = () => {
    window.clearTimeout(statusTimer)
    statusTimer = window.setTimeout(() => {
      downloadStatus.value = ''
      downloadStatusType.value = ''
    }, 3600)
  }

  const handleDownloadClient = async () => {
    if (isDownloading.value) return

    window.clearTimeout(statusTimer)
    isDownloading.value = true
    downloadStatus.value = statusText.loading
    downloadStatusType.value = 'loading'

    try {
      await downloadClient()
      downloadStatus.value = statusText.success
      downloadStatusType.value = 'success'
    } catch (error) {
      console.error(error)
      downloadStatus.value = statusText.error
      downloadStatusType.value = 'error'
    } finally {
      isDownloading.value = false
      clearStatusLater()
    }
  }

  return {
    downloadStatus,
    downloadStatusType,
    handleDownloadClient,
    isDownloading,
  }
}
