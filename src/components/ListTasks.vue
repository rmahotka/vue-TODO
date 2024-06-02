<script setup lang="ts">
import ItemTask from '@/components/ItemTask.vue'
import { type ITask } from '@/types'

defineProps<{
  tasks: ITask[]
}>()

const emit = defineEmits<{
  (event: 'deleteTask', id: number): void
  (event: 'compliteTask', id: number): void
}>()

const deleteItem = (id: number) => {
  emit('deleteTask', id)
}

const compliteTask = (id: number) => {
  emit('compliteTask', id)
}
</script>

<template>
  <div v-for="task in tasks" :key="task.id" class="list-block">
    <ItemTask :task="task" @delete-task="deleteItem" @complite-task="compliteTask" />
  </div>
</template>

<style scoped>
.list-block {
  font-size: 24px;
  width: 100%;
}
</style>

<!-- :class="{ complitedStatus: task.status }" -->
