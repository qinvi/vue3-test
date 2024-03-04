<script setup lang="ts">
import CustomInput from '@components/CustomInput.vue'

import { ref, onMounted } from 'vue'

// 子组件 CustomInput 相关
let searchText = ref('...')

// 组件引用
const input = ref<InstanceType<typeof CustomInput> | null>(null)
onMounted(() => {
  input.value?.getFallthroughAttr()
})
</script>

<template>
  <div><CustomInput class="fallthrough-class" v-model="searchText" />{{ searchText }}</div>
</template>

<style lang="scss" scoped></style>
