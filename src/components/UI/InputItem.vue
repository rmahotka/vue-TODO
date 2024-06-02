<template>
  <input v-model="model" type="text" />
</template>

<script setup>
const model = defineModel()
</script>

<style scoped>
input {
  background-color: inherit;
  outline: none;
  border: 0;
  border-bottom: 1px solid #fff;
  height: 20px;
  padding: 12px 8px;
  font-size: 24px;
  color: #fff;
  transition: 0.2s;
  width: 50%;
}

input:focus {
  border-color: #00c16a;
}
</style>
