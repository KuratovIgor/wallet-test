import { createRouter, createWebHistory } from 'vue-router'

export enum ROUTE_NAMES {
  mainLayout = 'main-layout',
  settings = 'settings',
  orderBook = 'order-book'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.mainLayout,
      component: () => import('@/layouts/MainLayout.vue'),
      redirect: {
        name: ROUTE_NAMES.settings
      },
      children: [
        {
          path: '/settings',
          name: ROUTE_NAMES.settings,
          component: () => import('@/views/SettingsPage.vue')
        },
        {
          path: '/order-book',
          name: ROUTE_NAMES.orderBook,
          component: () => import('@/views/OrderBookPage.vue')
        }
      ]
    }
  ]
})

export default router
