import { ResCode } from "~/modules"

declare global {
  type BaseResWrapper<T> = {
    data?: T
    code: ResCode
    message: string
  }
}
