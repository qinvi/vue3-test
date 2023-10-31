<script setup lang="ts">
import { computed, useAttrs } from 'vue'

// 自定义组件绑定的 v-model
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
// js 内部访问 fallthrough
const attrs = useAttrs()
console.log(attrs['class'])

// 禁止最外部的 fallthrough
defineOptions({
  inheritAttrs: false
})

// 通过 computed 内部的 get、set 方法
const value = computed({
  get() {
    return props.modelValue
  },
  set(newVal) {
    emit('update:modelValue', newVal)
  }
})
</script>

<template>
  <div class="btn-wrapper">
    <input
      class="block black"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
    <!-- computed 实现 v-model -->
    <input class="black" v-model="value" />
  </div>
</template>

<style scoped lang="scss">
.block {
  display: block;
}
.black {
  color: black;
}
</style>
