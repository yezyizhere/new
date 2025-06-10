import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/test', name: 'test', component: () => import('@/pages/Test.vue') },
  ],
})

export default router
