<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const object = {
  count
}
function increment() {
  object.count.value++
}
</script>

<template>
  <div class="api-block">
    <h3>ref reactive 解构相关</h3>
    <div>{{ count }}</div>
    <div>{{ object.count.value }}</div>
    <button
      @click="increment"
      style="background: rgb(255, 0, 0); height: 30px; width: 100%"
    ></button>
  </div>
</template>

<style lang="scss" scoped></style>
