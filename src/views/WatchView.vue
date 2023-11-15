<script setup lang="ts">
import { ref, watch } from 'vue'

// watch
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>

<template>
  <div class="api-block">
    <h4>watch function</h4>
    <p>
      Ask a yes/no question:
      <input class="color-black" v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
