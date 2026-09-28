import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import LegalView from '../views/legal/index.vue'
import TutorialView from '../views/tutorial/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: TutorialView,
    },
    {
      path: '/user-agreement',
      name: 'user-agreement',
      component: LegalView,
      meta: { doc: 'terms' },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: LegalView,
      meta: { doc: 'privacy' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router
