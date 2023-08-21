import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/registration.vue')
    },
    {
      path: '/updatecontact/:contactId',
      name: 'updatecontact',
      component: () => import('../components/updatecontact.vue'),
      props: true
    },
    {
      path: '/addcontact',
      name: 'addcontact',
      component: () => import('../components/addcontact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    }
  ]
})

export default router
