import { createRouter, createWebHistory } from 'vue-router'

const ROUTE_NAMES = {
  homePage: 'home'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.homePage,
      component: () => import('@/views/HomePage.vue')
    }
  ]
})

export default router
