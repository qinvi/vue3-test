<script setup lang="ts">
import { computed } from 'vue'

// 自定义组件绑定的 v-model
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

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
  <input
    class="block black"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target?.value)"
  />
  <!-- computed 实现 v-model -->
  <input class="black" v-model="value" />
</template>

<style scoped lang="scss">
.block {
  display: block;
}
.black {
  color: black;
}
</style>
