<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('qingwei')
const lastName = ref('zeng')
let fullName = computed<string>({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(newVal) {
    ;[firstName.value, lastName.value] = newVal.split(' ')
  }
})
</script>

<template>
  <div class="api-block">
    <h3>computed api</h3>
    <ul>
      Has published books:
      <span>{{ publishedBooksMessage }}</span>

      <li v-for="book in author.books" :key="book">{{ book }}</li>
    </ul>
    <div>
      <h3>computer 调用 get、set 方法</h3>
      修改 fullName: <input class="black" v-model="fullName" />
      <div>
        <p>firstName: {{ firstName }}</p>
        <p>lastName: {{ lastName }}</p>
        <p>
          {{ fullName }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: block;
}
.black {
  color: black;
}
</style>
