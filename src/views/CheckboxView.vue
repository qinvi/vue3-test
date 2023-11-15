<script setup lang="ts">
import { ref } from 'vue'

// 表单输入
const checked = ref(false)
const checkedNames = ref([])
</script>

<template>
  <div class="api-block">
    <div>
      <h4>单一复选框</h4>
      <h3>表单输入</h3>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
      <h4>多个复选框</h4>
      <div>Checked names: {{ checkedNames }}</div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="waylon" value="Waylon" v-model="checkedNames" />
      <label for="waylon">Waylon</label>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
