<script setup lang="ts">
const greetingMessage = 'slotText'
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :count="1" :text="greetingMessage"></slot>
    </main>
  </div>
</template>
