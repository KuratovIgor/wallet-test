<template>
  <h1 class="mb-10">Выберите валютную пару</h1>
  <v-select v-model="currencyPair" label="Валютная пара" :items="CURRENCY_PAIRS">
    <template #item="{ props }">
      <v-list-item v-bind="props" @click="handleCurrencyPairChoose" />
    </template>
  </v-select>

  <pairs-change-log />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import PairsChangeLog from '@/components/PairsChangeLog.vue'
import { useWalletStore } from '@/stores/wallet'
import { useChangelogStore } from '@/stores/changelog'
import { DateUtil } from '@/utils/date'

const { CURRENCY_PAIRS, setActiveCurrencyPair } = useWalletStore()
const { saveLog } = useChangelogStore()

const currencyPair = ref(CURRENCY_PAIRS[0])

let currencyPairBuffer = CURRENCY_PAIRS[0]

const handleCurrencyPairChoose = (): void => {
  setActiveCurrencyPair(currencyPair.value)

  saveLog({
    pairFrom: currencyPairBuffer,
    pairTo: currencyPair.value,
    date: DateUtil.getFormattedDate(new Date(), 'dd.MM.yyyy'),
    time: DateUtil.getFormattedDate(new Date(), 'HH mm:ss')
  })

  currencyPairBuffer = currencyPair.value
}

onMounted(() => setActiveCurrencyPair(CURRENCY_PAIRS[0]))
</script>
