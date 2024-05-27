<template>
  <h1 class="mb-10">Choose currency pair</h1>
  <v-select v-model="currencyPair" label="Select" :items="CURRENCY_PAIRS">
    <template #item="{ props }">
      <v-list-item v-bind="props" @click="setActiveCurrencyPair(currencyPair)" />
    </template>
  </v-select>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useWalletStore } from '@/stores/wallet'

const { CURRENCY_PAIRS, setActiveCurrencyPair } = useWalletStore()

const currencyPair = ref(CURRENCY_PAIRS[0])

onMounted(() => setActiveCurrencyPair(CURRENCY_PAIRS[0]))
</script>
