import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/locales/i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
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
        {
          path: 'app',
          name: 'application',
          component: () => import('@/views/app/HomeView.vue'),
          children: [
            // Ajouter ici les sous-routes de l'application
          ],
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: to => {
        const locale = localStorage.getItem('locale') || 'en';
        return `/${locale}/login`;
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const language = to.params.locale || localStorage.getItem('locale') || 'en';
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const authNotRequired = ['sign', 'login'];

  if (!['en', 'fr'].includes(language as string)) {
    // @ts-ignore
    i18n.global.locale = 'en'
    return next(`/${localStorage.getItem('locale')}/login`);
  } else {
    // @ts-ignore
    i18n.global.locale = language;
    localStorage.setItem('locale', language as string);
  }

  if (!to.params.locale) {
    return next(`/${language}/login`);
  }

  if (!authNotRequired.includes(to.name as string) && !isLoggedIn) {
    return next({ name: 'login', params: { locale: language } });
  }

  next();
});

export default router;
