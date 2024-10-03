import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connection',
      component: () => import('@/views/login_sign/ConnectView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/views/log.vue'),
        },
        {
          path: 'sign',
          name: 'sign',
          component: () => import('@/components/views/sign.vue'),
        },
      ],
    },
    {
      path: "/app",
      name: "application",
      component: () => import('@/views/app/HomeView.vue'),
      children: [
        
      ]
    }
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const authNotRequired = ['sign', 'login'];

  if (!authNotRequired.includes(to.name as string) && !isLoggedIn) {
    next({ name: 'login' });
  } else {
    next(); 
  }
});

export default router;
