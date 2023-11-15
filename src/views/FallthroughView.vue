<script setup lang="ts">
import CustomInput from '@components/CustomInput.vue'

import { ref } from 'vue'

// 子组件 CustomInput 相关
let searchText = ref('...')
</script>

<template>
  <div><CustomInput class="fallthrough-class" v-model="searchText" />{{ searchText }}</div>
</template>

<style lang="scss" scoped></style>
