<script setup lang="ts">
const [model, modifiers] = defineModel<string, {}>({
  set(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
</script>

<template>
  <span>my input</span>
  <input class="block black" v-model="model" />
</template>

<style scoped lang="scss">
.block {
  display: block;
}
.black {
  color: black;
}
</style>
