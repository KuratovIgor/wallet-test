<template>
  <h1 class="mb-10">Выберите валютную пару</h1>
  <v-select v-model="activeCurrencyPair" label="Валютная пара" :items="CURRENCY_PAIRS">
    <template #item="{ props }">
      <v-list-item v-bind="props" @click="handleCurrencyPairChoose" />
    </template>
  </v-select>

  <pairs-change-log />
</template>

<script lang="ts" setup>
import PairsChangeLog from '@/components/PairsChangeLog.vue'
import { useWalletStore } from '@/stores/wallet'
import { useChangelogStore } from '@/stores/changelog'
import { DateUtil } from '@/utils/date'
import { storeToRefs } from 'pinia'

const { CURRENCY_PAIRS } = useWalletStore()
const { activeCurrencyPair } = storeToRefs(useWalletStore())
const { saveLog } = useChangelogStore()

let currencyPairBuffer = CURRENCY_PAIRS[0]

const handleCurrencyPairChoose = (): void => {
  saveLog({
    pairFrom: currencyPairBuffer,
    pairTo: activeCurrencyPair.value,
    date: DateUtil.getFormattedDate(new Date(), 'dd.MM.yyyy'),
    time: DateUtil.getFormattedDate(new Date(), 'HH mm:ss')
  })

  currencyPairBuffer = activeCurrencyPair.value
}
</script>
