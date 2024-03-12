<script setup lang="ts">
// import { defineModel } from 'vue'
const model = defineModel()
</script>

<template>
  <span>my input</span>
  <input class="block black" v-model="model" />
</template>

<style scoped lang="scss">
.block {
  display: block;
}
.black {
  color: black;
}
</style>
