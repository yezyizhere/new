import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import LiveYearPage from '@/layout/LiveYearPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/Test.vue'),
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('@/pages/Live.vue'),
    },
    {
      path: '/live/:year',
      name: 'liveyear',
      component: LiveYearPage,
    },
  ],
})

export default router
