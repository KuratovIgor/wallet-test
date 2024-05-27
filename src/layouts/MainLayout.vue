<template>
  <v-app>
    <v-app-bar :elevation="17">
      <template #prepend>
        <v-icon icon="mdi-bank" />
      </template>

      <v-app-bar-title>Кошелек</v-app-bar-title>

      <template v-slot:append>
        <v-tabs v-model="tab">
          <v-tab
            v-for="(tab, index) in MENU_TABS"
            :key="index"
            :value="tab.value"
            @click="handleTabClick(tab.routeName)"
          >
            {{ tab.label }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="(tab, index) in MENU_TABS" :key="index" :value="tab.value">
          <RouterView />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/router'

const router = useRouter()

const MENU_TABS = [
  {
    value: 'settings',
    label: 'Настройки',
    routeName: ROUTE_NAMES.settings
  },
  {
    value: 'order-book',
    label: 'Order Book',
    routeName: ROUTE_NAMES.orderBook
  }
]

const tab = ref(MENU_TABS[0].value)

const handleTabClick = (routeName: ROUTE_NAMES): void => {
  router.push({ name: routeName })
}
</script>
