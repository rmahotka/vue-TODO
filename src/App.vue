<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue'
</script>

<template>
  <HeaderItem />
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  margin-top: 80px;
}
</style>
