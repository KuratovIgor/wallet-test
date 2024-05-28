<template>
  <v-app>
    <v-app-bar :elevation="17">
      <template #prepend>
        <v-icon icon="$vuetify-outline" />
      </template>

      <v-app-bar-title>Order Book</v-app-bar-title>

      <template v-slot:append>
        <v-tabs v-model="activeTab">
          <v-tab
            v-for="(tab, index) in MENU_TABS"
            :key="index"
            :value="tab.value"
            @click="handleTabClick(tab.value)"
          >
            {{ tab.label }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-tabs-window v-model="activeTab">
        <v-tabs-window-item v-for="(tab, index) in MENU_TABS" :key="index" :value="tab.value">
          <v-container>
            <router-view />
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/router'

const route = useRoute()
const router = useRouter()

const MENU_TABS = [
  {
    value: ROUTE_NAMES.settings,
    label: 'Settings'
  },
  {
    value: ROUTE_NAMES.orderBook,
    label: 'Order Book'
  }
]

const activeTab = ref(route.name)

const handleTabClick = (routeName: ROUTE_NAMES): void => {
  router.push({ name: routeName })
}
</script>
