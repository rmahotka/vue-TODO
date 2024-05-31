<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue'
</script>

<template>
  <div class="container">
    <HeaderItem />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #090f26;
  color: #fff;
  height: 100vh;
  padding: 0 50px;
}

.content {
  margin-top: 40px;
}
</style>
