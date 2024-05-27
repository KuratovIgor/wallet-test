import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useConnectionStore } from '@/stores/connection'

export const useWalletStore = defineStore('wallet', () => {
  const { handleSocketMessage, openConnection, closeConnection } = useConnectionStore()

  const CURRENCY_PAIRS = ['BTCUSDT', 'BNBBTC', 'ETHBTC']

  const activeCurrencyPair = ref('')
  const currencyPairsData = ref([])

  const setActiveCurrencyPair = (pair: string): void => {
    activeCurrencyPair.value = pair
  }

  watch(
    () => activeCurrencyPair.value,
    (newPair: string) => {
      subscribeOnCurrencyPair(newPair)
    }
  )

  const subscribeOnCurrencyPair = (pair: string) => {
    closeConnection()
    openConnection(`wss://stream.binance.com:9443/ws/${pair.toLocaleLowerCase()}@depth`)

    handleSocketMessage((event) => {
      const data = JSON.parse(event.data)

      currencyPairsData.value = data.a
    })
  }

  return {
    CURRENCY_PAIRS,
    setActiveCurrencyPair
  }
})
