/**
 * 声明导出类型，eg: InjectionKey
 */

import type { Ref } from 'vue'

interface Location {
  location: Ref<string>
  updateLocation: (newVal: string) => void
}

// 类型导出
export type { Location }
