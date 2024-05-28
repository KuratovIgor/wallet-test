import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { WebSocketUtil } from '@/utils/socket'
import type { DepthType } from '@/types/depth.type'

export const useDepthStore = defineStore('depth', () => {
  const CURRENCY_PAIRS = ['BTCUSDT', 'BNBBTC', 'ETHBTC']

  const activeCurrencyPair = ref(CURRENCY_PAIRS[0])

  const asksDepth = ref<DepthType[]>([])
  const bidsDepth = ref<DepthType[]>([])

  const asksDepthData = computed(() => asksDepth.value)
  const bidsDepthData = computed(() => bidsDepth.value)

  const subscribeOnDepthUpdate = (currencyPair: string) => {
    const connectionUrl = `wss://stream.binance.com:9443/ws/${currencyPair.toLocaleLowerCase()}@depth`

    asksDepth.value = []
    bidsDepth.value = []

    WebSocketUtil.closeConnection()
    WebSocketUtil.openConnection(connectionUrl)
    WebSocketUtil.onSocketMessage(updateDepths)
  }

  const updateDepths = (event: MessageEvent): void => {
    const data = JSON.parse(event.data)
    const asks = data.a
    const bids = data.b

    asks.forEach((pair: string[]) => {
      asksDepth.value.push({
        price: pair[0],
        quantity: pair[1],
        total: +pair[0] * +pair[1]
      })
    })

    bids.forEach((pair: string[]) => {
      bidsDepth.value.push({
        price: pair[0],
        quantity: pair[1],
        total: +pair[0] * +pair[1]
      })
    })
  }

  watch(
    () => activeCurrencyPair.value,
    (newPair: string) => {
      subscribeOnDepthUpdate(newPair)
    },
    { immediate: true }
  )

  return {
    activeCurrencyPair,
    CURRENCY_PAIRS,
    asksDepthData,
    bidsDepthData
  }
})
