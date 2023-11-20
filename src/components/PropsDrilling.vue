<script setup lang="ts">
import { computed } from 'vue'
import { LocationKey } from '@src/symbols'
import { injectStrict } from '@src/utils'

// inject 依赖
const { location, updateLocation } = injectStrict(LocationKey)
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
