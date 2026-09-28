import { downloadClientApiUrl } from '../constants/download'

const getFilenameFromUrl = (url) => {
  const pathname = new URL(url, window.location.origin).pathname
  return decodeURIComponent(pathname.split('/').pop() || '')
}

const startDownload = (url, filename = 'tscy-win') => {
  const anchor = document.createElement('a')

  anchor.href = url
  anchor.download = filename
  anchor.style.display = 'none'
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
}

const findDownloadUrl = (payload) => {
  if (typeof payload === 'string') return payload

  const candidates = [
    payload?.url,
    payload?.file_url,
    payload?.downloadUrl,
    payload?.download_url,
    payload?.href,
    payload?.link,
    payload?.data,
    payload?.data?.url,
    payload?.data?.file_url,
    payload?.data?.downloadUrl,
    payload?.data?.download_url,
    payload?.data?.href,
    payload?.data?.link,
  ]

  return candidates.find((item) => typeof item === 'string' && item.trim())
}

export const downloadClient = async () => {
  const response = await fetch(downloadClientApiUrl)

  if (!response.ok) {
    throw new Error('download request failed')
  }

  const payload = await response.json()
  const downloadUrl = findDownloadUrl(payload)

  if (!downloadUrl) {
    throw new Error('download url missing')
  }

  startDownload(downloadUrl, getFilenameFromUrl(downloadUrl) || 'tscy-win')
}
