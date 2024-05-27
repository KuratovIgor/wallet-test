import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { LogType } from '@/types/changelog.type'

export const useChangelogStore = defineStore('changelog', () => {
  const logs = ref<LogType[]>([])

  const changelog = computed(() => logs.value)

  const saveLog = (log: LogType): void => {
    logs.value.push(log)
  }

  return {
    changelog,
    saveLog
  }
})
