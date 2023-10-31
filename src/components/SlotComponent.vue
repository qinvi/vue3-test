<script setup lang="ts">
const greetingMessage = 'slotText'
</script>

<template>
  <div>
    <slot :count="1" :text="greetingMessage"></slot>
  </div>
</template>
