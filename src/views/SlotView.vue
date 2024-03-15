<script setup lang="ts">
import FancyButton from '@components/FancyButton.vue'
import AwesomeIcon from '@components/AwesomeIcon.vue'
import SlotComponent from '@components/SlotComponent.vue'
</script>

<template>
  <div class="wrapper-slot">
    <FancyButton>click me</FancyButton>
    <FancyButton>
      click me
      <AwesomeIcon></AwesomeIcon>
    </FancyButton>
    <SlotComponent>
      <template #default="slotProps">
        <p>{{ slotProps.text }} - {{ slotProps.count }}</p>
      </template>
      <template #header>
        <h1>这是 header slot 内容</h1>
      </template>
    </SlotComponent>
  </div>
</template>

<style lang="scss" scoped></style>
