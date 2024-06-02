<script setup lang="ts">
import { computed, ref } from 'vue'
import InputItem from '@/components/UI/InputItem.vue'
import ButtonItem from '@/components/UI/ButtonItem.vue'
import ListTasks from '@/components/ListTasks.vue'
import SortComponents from '@/components/SortComponents.vue'
import AlertItem from '@/components/AlertItem.vue'
import type { ITask, btnStatus } from '@/types'

const inputValue = ref<string>('')
const errorStatus = ref<boolean>(false)
const activeBtn = ref<btnStatus>('All')
const tasksMas = ref<ITask[]>([
  {
    id: 1,
    text: 'Task 1',
    status: false
  },
  {
    id: 2,
    text: 'Task 2',
    status: false
  },
  {
    id: 3,
    text: 'Task 3',
    status: false
  },
  {
    id: 4,
    text: 'Task 4',
    status: false
  },
  {
    id: 5,
    text: 'Task 5',
    status: true
  }
])

const filterTodos = computed(() => {
  switch (activeBtn.value) {
    case 'Active':
      return tasksMas.value.filter((task: ITask) => !task.status)
    case 'Done':
      return tasksMas.value.filter((task: ITask) => task.status)
    case 'All':
    default:
      return tasksMas.value
  }
})

const addTask = (task: string) => {
  if (!tasksMas.value) {
    throw Error('tasksMas is not provided!')
  }
  if (!inputValue.value) {
    errorStatus.value = true
    setTimeout(() => {
      errorStatus.value = false
    }, 3000)
  } else {
    tasksMas.value.push({ id: Math.random(), text: task, status: false })
    inputValue.value = ''
  }
}

const deleteItem = (id: number) => {
  tasksMas.value = tasksMas.value.filter((item: ITask) => item.id !== id)
}

const compliteTask = (id: number) => {
  const task = tasksMas.value.find((item: ITask) => item.id === id)
  if (task) {
    task.status = !task.status
  } else {
    console.error(`Task with id ${id} not found`)
  }
}

const statistic = computed(() => {
  const done = tasksMas.value.filter((item: ITask) => item.status)
  const active = tasksMas.value.filter((item: ITask) => !item.status)
  return `Active: ${active.length}, Done: ${done.length}`
})

const sortTask = (status: btnStatus) => {
  activeBtn.value = status
}
</script>

<template>
  <AlertItem :errorStatus="errorStatus" />

  <div class="content">
    <div class="input-box">
      <InputItem v-model="inputValue" @keyup.enter="addTask(inputValue)" />
      <ButtonItem @click="addTask(inputValue)">Insert</ButtonItem>
    </div>
    <SortComponents @show-sort="sortTask" :activeBtn="activeBtn" />
    <div class="task-list">
      <ListTasks :tasks="filterTodos" @complite-task="compliteTask" @delete-task="deleteItem" />
    </div>

    <div class="statistic">{{ statistic }}</div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.input-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 70px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.statistic {
  margin-top: 40px;
  font-size: 25px;
  opacity: 0.7;
}
</style>
