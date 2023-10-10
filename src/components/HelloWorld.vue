<script setup lang="ts">
// 声明 emits 事件
const emit = defineEmits<{
  changeColor: [color: string]
}>()
// 泛型参数定义 props 声明（基于类型的声明
// 使用 ts 的基于类型的声明比运行时声明更直观，二者不能同时使用
interface genProps {
  msg: string
}
defineProps<genProps>()

// 运行时声明 props
// defineProps({
//   msg: {
//     type: String
//   }
// })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <span @click="emit('changeColor', 'red')">You’ve successfully created a project with</span>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
