import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useConnectionStore } from '@/stores/connection'

export const useWalletStore = defineStore('wallet', () => {
  const { handleSocketMessage, openConnection, closeConnection } = useConnectionStore()

  const CURRENCY_PAIRS = ['BTCUSDT', 'BNBBTC', 'ETHBTC']

  const activeCurrencyPair = ref(CURRENCY_PAIRS[0])
  const asksPairs = ref<any>([])
  const bidsPairs = ref<any>([])

  const asksPairsData = computed(() => asksPairs.value)
  const bidsPairsData = computed(() => bidsPairs.value)

  const subscribeOnCurrencyPair = (pair: string) => {
    closeConnection()
    openConnection(`wss://stream.binance.com:9443/ws/${pair.toLocaleLowerCase()}@depth`)

    asksPairs.value = []
    bidsPairs.value = []

    handleSocketMessage((event) => {
      const data = JSON.parse(event.data)
      const asks = data.a
      const bids = data.b

      asks.forEach((pair: string[]) => {
        asksPairs.value.push({
          price: pair[0],
          quantity: pair[1],
          total: +pair[0] * +pair[1]
        })
      })

      bids.forEach((pair: string[]) => {
        bidsPairs.value.push({
          price: pair[0],
          quantity: pair[1],
          total: +pair[0] * +pair[1]
        })
      })
    })
  }

  watch(
    () => activeCurrencyPair.value,
    (newPair: string) => {
      subscribeOnCurrencyPair(newPair)
    },
    { immediate: true }
  )

  return {
    activeCurrencyPair,
    CURRENCY_PAIRS,
    asksPairsData,
    bidsPairsData
  }
})
