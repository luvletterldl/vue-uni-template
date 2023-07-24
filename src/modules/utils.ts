/** 是否请求成功 */
export function reqOK(code: number | Array<number>) {
  return Array.isArray(code) ? code.every(c => c === 200) : code === 200
}

/** 获取区间随机数 */
export function getRandom(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

/** 常用分享 */
export function commonShare(res: { from: string }) {
  if (res.from === 'menu' || res.from === 'button') {
    return {
      title: '',
      path: '/pages/index/index',
      imageUrl: '',
    }
  }
}

/** 分享作品 */
export function shareModel(res: { from: string }, title: string, path: string, url: string) {
  if (res.from === 'menu' || res.from === 'button') {
    return {
      title,
      path,
      imageUrl: url,
    }
  }
}

/** dataURL to Blob */
export function dataURLtoBlob(dataurl: string) {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  return new Blob([u8arr], { type: mime })
}
