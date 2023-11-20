<script setup lang="ts">
import { ref } from 'vue'

const list = ref([1, 2, 3, 4, 5])
function remove(item: number) {
  const i = list.value.indexOf(item)
  if (i > -1) {
    list.value.splice(i, 1)
  }
}
</script>

<template>
  <TransitionGroup name="list" tag="group">
    <li v-for="item in list" :key="item" @click="remove(item)">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
li {
  cursor: pointer;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
