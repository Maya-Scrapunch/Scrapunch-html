import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessView from '../views/AccessView.vue'
import TourismView from '../views/TourismView.vue'
import ModelView from '../views/ModelView.vue'
import Maruichi from '../views/Maruichi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/access',
      name: 'access',
      component: AccessView
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: TourismView
    },
    {
      path: '/models',
      name: 'models',
      component: ModelView
    },
    {
          path: '/maruichi',
          name: 'maruichi',
          component: Maruichi
        }
  ]
})

export default router