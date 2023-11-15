<script setup lang="ts">
import HelloWorld from '@components/HelloWorld.vue'

// 子组件触发
function changeColor(color: string) {
  console.log(color)
}
</script>

<template>
  <HelloWorld @change-color="changeColor" msg="嘿！！小曾 You did it!" />
</template>

<style lang="scss" scoped></style>
