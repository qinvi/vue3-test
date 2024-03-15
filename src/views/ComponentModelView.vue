<script setup lang="ts">
import ChildModel from '@components/ChildModel.vue'
import { ref } from 'vue'

const msg = ref('hello world!!')
</script>

<template>
  <div>
    <h1>Components v-model</h1>
    <p>{{ msg }}</p>
    <ChildModel v-model.capitalize="msg"></ChildModel>
  </div>
</template>
