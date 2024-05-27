import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConnectionStore = defineStore('connection', () => {
  const socket = ref<WebSocket | null>(null)

  const closeConnection = (): void => {
    if (socket.value) {
      socket.value.close()
    }
  }

  const openConnection = (socketUrl: string): void => {
    socket.value = new WebSocket(socketUrl)
  }

  const handleSocketMessage = (handler: (event: MessageEvent) => void): void => {
    socket.value?.addEventListener('message', (event) => {
      handler(event)
    })
  }

  return {
    openConnection,
    closeConnection,
    handleSocketMessage
  }
})
