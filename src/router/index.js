import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/views/Top.vue'
import Profile from '@/views/Profile.vue'
import Works from '@/views/Works.vue'
import PR from '@/views/PR.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works
  },
  {
    path: '/PR',
    name: 'PR',
    component: PR
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
