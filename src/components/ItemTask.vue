<template>
  <div class="item-block" @click="compliteTask(props.task.id)">
    <p class="item-block-text">
      <i class="pi pi-check" v-if="props.task.status" />
      <span :class="{ compluted: props.task.status }">{{ props.task.text }}</span>
    </p>
    <i class="pi pi-trash delete-tast" @click.stop="deleteTask(props.task.id)" />
  </div>
</template>

<script setup lang="ts">
import { type ITask } from '@/types'

const props = defineProps<{
  task: ITask
}>()

const emit = defineEmits<{
  (event: 'deleteTask', id: number): void
  (event: 'compliteTask', id: number): void
}>()

const compliteTask = (id: number) => {
  emit('compliteTask', id)
}

const deleteTask = (id: number) => {
  emit('deleteTask', id)
}
</script>

<style scoped>
.compluted {
  text-decoration: line-through;
}

.item-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid #58585871;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
}

.item-block-text {
  display: flex;
  align-items: center;
  gap: 10px;
}

.delete-tast {
  display: block;
  z-index: 1;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 8px;
}

.delete-tast:hover {
  color: #00c16a;
  opacity: 1;
}
</style>
