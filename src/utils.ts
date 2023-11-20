/**
 * 工具函数
 */
import { inject, type InjectionKey } from 'vue'

/**
 * 处理 InjectionKey<T> 默认值
 * @param key: @src/symbols 导入的 InjectionKey
 * @param fallback: 默认值
 */
function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`could not resolve ${key.description}`)
  }
  return resolved
}

export { injectStrict }
