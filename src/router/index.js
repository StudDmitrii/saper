import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import LeadersView from '../views/LeadersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/leaders',
      name: 'leaders',
      component: LeadersView,
      props: true
    },
    {
      path: '/game/:rows&:cols&:bombs',
      name: 'game',
      component: GameView,
      props: true
    }
  ]
})

export default router
