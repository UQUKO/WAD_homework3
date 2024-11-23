import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';

const routes = [

  { path: '/',
    component: HomeView },
  { 
    path: '/signup', 
    component: SignUpComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
