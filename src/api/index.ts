import { ResCode, useToken } from '~/modules'

export function request<T>(url: string, options?: { method: 'GET' | 'POST'; header?: HeadersInit | undefined; body?: any }): Promise<T> {
  return new Promise((resolve, reject) => {
    console.log(`${import.meta.env.VITE_APP_APIURL}${url}`)
    uni.request({
      url: getOriginUrl(url),
      method: options?.method || 'GET',
      header: options?.header,
      data: options?.body,
      success: (res) => {
        if (res.statusCode === 200)
          resolve(resSuccessPreHandler(res.data as any))
        else
          reject(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export function get<T>(url: string): Promise<T> {
  return request(url, {
    method: 'GET',
    header: {
      Authorization: `Bearer ${useToken()}`,
    },
  })
}

export function post<T>(url: string, body: any): Promise<T> {
  return request(url, {
    method: 'POST',
    body,
    header: {
      Authorization: `Bearer ${useToken()}`,
    },
  })
}

export function formPost<T>(url: string, body: any): Promise<T> {
  return request(url, {
    method: 'POST',
    body,
    header: {
      'Authorization': `Bearer ${useToken()}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
}

function resSuccessPreHandler(res: BaseResWrapper<any>) {
  if (res.code === ResCode.OK) {
    return res.data
  }
  else {
    uni.showToast({
      icon: 'none',
      title: res.message,
    })
    return res.data
  }
}

function getOriginUrl(url: string) {
  return `${import.meta.env.VITE_APP_APIURL}${url}`
}
