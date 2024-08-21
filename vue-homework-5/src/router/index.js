import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactPage from "@/views/ContactPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import UserProfile from "@/views/UserProfile.vue";
import AdminPage from "@/views/AdminPage.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import ParentComponent from '../views/ParentComponent.vue';
import ChildComponent from '../views/ChildComponent.vue';
import NotFound from "@/views/NotFound.vue";

import { isAuthenticated, getUserRole } from '@/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home Page', requiresAuth: false }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About Us', requiresAuth: false }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    meta: { title: 'Admin Page', requiresAuth: true, role: 'admin' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboard,
    meta: { title: 'User Dashboard', requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: { title: 'Contact Us', requiresAuth: false }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
    meta: { title: 'Services', requiresAuth: false }
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/login');
    } else {
      const userRole = getUserRole();
      if (to.meta.role && to.meta.role !== userRole) {
        next('/not-found');
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
