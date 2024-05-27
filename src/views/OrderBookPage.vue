<template>
  <div class="d-flex">
    <div class="w-100">
      <h3>Asks</h3>
      <v-data-table height="600" fixed-header :items="asksPairsData" />
    </div>

    <v-divider class="ml-10 mr-10" vertical />

    <div class="w-100">
      <h3>Bids</h3>
      <v-data-table height="600" fixed-header :items="bidsPairsData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWalletStore } from '@/stores/wallet'

const { asksPairsData, bidsPairsData } = useWalletStore()
</script>
