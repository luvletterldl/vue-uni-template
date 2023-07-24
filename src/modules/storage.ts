import { StorageKey } from './const'

/** token */
export function useToken(token?: string) {
  if (token)
    uni.setStorageSync(StorageKey.TOKEN, token)
  else
    return uni.getStorageSync(StorageKey.TOKEN)
}
