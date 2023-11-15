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
    <SlotComponent v-slot="slots"> {{ slots.text }} - {{ slots.count }} </SlotComponent>
  </div>
</template>

<style lang="scss" scoped></style>
