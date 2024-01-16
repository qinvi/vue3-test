// Proxy 来支持 reactive 响应式的实现

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      // 更新相关依赖的订阅者函数
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      // 执行相关依赖的所有订阅者函数
      trigger(target, key)
    }
  })
}

// value setter 支持 ref 的实现
function ref(value) {
  const refObj = {
    get value() {
      track(refObj, 'value')
      return value
    },
    set value(newValue) {
      value = newValue
      trigger(refObj, 'value')
    }
  }
  // 返回通过 getter/setter 劫持的 value 属性的对象
  return refObj
}
