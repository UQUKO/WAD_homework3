import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';

const routes = [

  { path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/signup', 
    name: 'signup',
    component: SignUpComponent 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
