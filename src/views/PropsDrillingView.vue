<script setup lang="ts">
import PropsDrilling from '@components/PropsDrilling.vue'

import { ref, provide } from 'vue'

// provide
const location = ref('North Pole')

// provide 提供以在 inject 组件修改 location 值
function updateLocation(newVal: string) {
  location.value = newVal
  console.log(`update provide 上响应数据：${newVal}`)
}
provide('location', {
  location,
  updateLocation
})
</script>

<template>
  <div class="wrapper-drilling">
    <PropsDrilling></PropsDrilling>
  </div>
</template>

<style lang="scss" scoped></style>
