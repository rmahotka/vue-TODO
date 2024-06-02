<template>
  <div class="sort-block">
    <ButtonItem
      v-for="filter in filters"
      :key="filter"
      @click="showSort(filter)"
      :class="{ 'btn-active': activeBtn === filter }"
    >
      {{ filter }}
    </ButtonItem>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type btnStatus } from '@/types'
import ButtonItem from './UI/ButtonItem.vue'

defineProps<{
  activeBtn: btnStatus
}>()

const filters = ref<btnStatus[]>(['All', 'Active', 'Done'])

const emit = defineEmits<{
  (event: 'showSort', status: btnStatus): void
}>()

const showSort = (status: btnStatus) => {
  emit('showSort', status)
}
</script>

<style scoped>
.sort-block {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

button {
  min-width: 100px;
  width: 100%;
}
</style>
