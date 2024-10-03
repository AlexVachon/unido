import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/login_sign/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'sign',
          name: 'sign',
          component: () => import('../components/views/sign.vue'),
        },
      ],
    }
  ]
})

export default router
