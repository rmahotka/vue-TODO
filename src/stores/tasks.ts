import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ITask } from '@/types'

export const useTasksStore = defineStore('tasks', () => {
  const tasksMas = ref<ITask[]>([
    {
      id: 1,
      text: 'Задание 1',
      status: false
    },
    {
      id: 2,
      text: 'Задание 2',
      status: true
    }
  ])

  const addTask = (task: ITask): Object => {
    return tasksMas.value.push(task)
  }

  return { tasksMas, addTask }
})
