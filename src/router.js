import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'; // Make sure to update the path based on your structure
import Dashboard from './components/Dashboard.vue';// Make sure to update the path based on your structure

import ContactPage from './components/ContactPage.vue';
import Showcase from './components/Showcase.vue';
import Creative from './components/Creative.vue';
import Profile from './components/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Dashboard,
  },
  {
    path: '/portfolio/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/portfolio/showcase',
    name: 'showcase',
    component: Showcase,
  },
  {
    path: '/portfolio/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/portfolio/creative',
    name: 'creative',
    component: Creative,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
