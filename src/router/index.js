import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
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
