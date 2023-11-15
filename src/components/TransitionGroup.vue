<script setup lang="ts">
import { ref } from 'vue'

const list = ref([1, 2, 3, 4, 5])
</script>

<template>
  <TransitionGroup name="list" tag="group">
    <li v-for="item in list" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>
