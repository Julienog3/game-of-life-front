import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimulatorView from '../views/SimulatorView.vue'
import PresentationView from '../views/PresentationView.vue'
import GlossaryView from '../views/GlossaryView.vue'
import LoginView from '../views/LoginView.vue'

import AdminDashboardView from '../views/admin/AdminDashboardView.vue'

import AdminPatternListView from '../views/admin/pattern/AdminPatternListView.vue'
import AdminPatternNewView from '../views/admin/pattern/AdminPatternNewView.vue'

import AdminConfigurationsListView from '../views/admin/configurations/AdminConfigurationsListView.vue'
import AdminConfigurationsNewView from '../views/admin/configurations/AdminConfigurationsNewView.vue'
import AdminConfigurationsUpdateView from '../views/admin/configurations/AdminConfigurationsUpdateView.vue'
import AdminUsersListView from '../views/admin/users/AdminUsersListView.vue'
import AdminHelpView from '../views/admin/AdminHelpView.vue'
import AdminLayout from '@/components/layouts/AdminLayout.vue'
import AdminUsersNewView from "../views/admin/users/AdminUsersNewView.vue"
import AdminUsersUpdateView from "../views/admin/users/AdminUsersUpdateView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/simulator',
      name: 'simulator',
      component: SimulatorView
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: PresentationView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/glossary',
      name: 'glossary',
      component: GlossaryView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: AdminDashboardView,
        },
        {
          path: 'patterns',
          name: 'patterns',
          component: AdminPatternListView,
        },
        {
          path: 'patterns/new',
          name: 'pattern_new',
          component: AdminPatternNewView,
        },
        {
          path: 'types',
          name: 'types',
          component: AdminConfigurationsListView,
        },
        {
          path: 'types/new',
          name: 'types_new',
          component: AdminConfigurationsNewView,
        },
        {
          path: 'types/:id/update',
          name: 'types_update',
          component: AdminConfigurationsUpdateView,
        },
        {
          path: 'users',
          name: 'users',
          component: AdminUsersListView,
        },
        {
          path: 'users/new',
          name: 'users_new',
          component: AdminUsersNewView,
        },
        {
          path: 'users/:id/update',
          name: 'users_update',
          component: AdminUsersUpdateView,
        },
        {
          path: 'help',
          name: 'help',
          component: AdminHelpView,
        },
      ]
    },
    
    
  ]
})

export default router
