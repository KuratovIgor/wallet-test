<template>
  <v-card>
    <v-toolbar color="secondary">
      <v-toolbar-title>Лог изменений валютной пары</v-toolbar-title>
    </v-toolbar>

    <v-list lines="two">
      <v-virtual-scroll height="500" :items="changelog">
        <template #default="{ item }">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-bitcoin" />
            </template>

            <div class="d-flex">
              <div>{{ item.pairFrom }}</div>
              <v-icon icon="mdi-arrow-right-thin" />
              <div>{{ item.pairTo }}</div>
            </div>

            <template v-slot:append>
              <div class="d-flex flex-column align-lg-end">
                <div>{{ item.date }}</div>
                <div class="text-subtitle-2">{{ item.time }}</div>
              </div>
            </template>
          </v-list-item>
        </template>
      </v-virtual-scroll>

      <v-divider inset></v-divider>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
import { useChangelogStore } from '@/stores/changelog'

const { changelog } = useChangelogStore()
</script>
