<template>
  <div class="d-flex">
    <div class="w-100 mr-5">
      <h3>Asks</h3>
      <v-data-table height="600" fixed-header :items="asksDepthColumns" />
    </div>

    <div class="w-100">
      <h3>Bids</h3>
      <v-data-table height="600" fixed-header :items="bidsDepthColumns" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useDepthStore } from '@/stores/depth.store'
import { useMobile } from '@/composables/useMobile'
import type { DepthType } from '@/types/depth.type'

const { asksDepthData, bidsDepthData } = storeToRefs(useDepthStore())
const { isMobile, isTablet } = useMobile()

const asksDepthColumns = computed(() => getDepthColumns(asksDepthData.value))
const bidsDepthColumns = computed(() => getDepthColumns(bidsDepthData.value))

const getDepthColumns = (depthData: DepthType[]): DepthType[] | Omit<DepthType, 'quantity'>[] => {
  if (!isTablet.value && !isMobile.value) {
    return depthData
  }

  return depthData.map((item) => ({
    price: item.price,
    total: item.total
  }))
}
</script>
