import type { ResCode } from '~/modules'

declare global {
  interface BaseResWrapper<T> {
    data?: T
    code: ResCode
    message: string
  }
}
