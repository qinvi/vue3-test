<script setup lang="ts">
import { inject, computed } from 'vue'

// inject 依赖
const { location, updateLocation } = inject('location')
console.log(location, updateLocation)
const value = computed({
  get() {
    return location.value
  },
  set(newVal: string) {
    updateLocation(newVal)
  }
})
</script>

<template>
  <input class="block black" v-model="value" />
</template>

<style scoped lang="scss">
.block {
  display: block;
}
.black {
  color: black;
}
</style>
