import { createRouter, createWebHistory } from 'vue-router'

import ProjectsView from '../views/ProjectsView.vue'
import WorksView from '../views/WorksView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectsView
    },
    {
      path: '/obras',
      name: 'obras',
      component: WorksView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: AboutUsView
    },
    {
      path: '/contactos',
      name: 'contactos',
      component: ContactUsView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
