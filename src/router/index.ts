import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimulatorView from '../views/SimulatorView.vue'
import PresentationView from '../views/PresentationView.vue'
import GlossaryView from '../views/GlossaryView.vue'
import PatternView from '../views/PatternView.vue'

import AdminDashboardView from '../views/admin/AdminDashboardView.vue'

import AdminPatternListView from '../views/admin/pattern/AdminPatternListView.vue'
import AdminPatternNewView from '../views/admin/pattern/AdminPatternNewView.vue'

import AdminTypeView from '../views/admin/AdminTypeView.vue'
import AdminUserView from '../views/admin/AdminUserView.vue'
import AdminHelpView from '../views/admin/AdminHelpView.vue'

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
      path: '/pattern',
      name: 'pattern',
      component: GlossaryView
    },
    {
      path: '/pattern/:id',
      name: 'pattern_view',
      component: PatternView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboardView,
    },
    {
      path: '/admin/pattern',
      name: 'admin_pattern',
      component: AdminPatternListView,
    },
    {
      path: '/admin/pattern/new',
      name: 'admin_pattern_new',
      component: AdminPatternNewView,
    },
    {
      path: '/admin/type',
      name: 'admin_type',
      component: AdminTypeView,
    },
    {
      path: '/admin/user',
      name: 'admin_user',
      component: AdminUserView,
    },
    {
      path: '/admin/help',
      name: 'admin_help',
      component: AdminHelpView,
    },
  ]
})

export default router
