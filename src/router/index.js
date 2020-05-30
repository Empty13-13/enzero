import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Main' },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'authorization' },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'authorization' },
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/lists',
    name: 'lists',
    meta: { layout: 'main' },
    component: () => import('@/views/Lists.vue'),
  },
  {
    path: '/money',
    name: 'money',
    meta: { layout: 'main' },
    component: () => import('@/views/Money.vue'),
  },
  {
    path: '/Social',
    name: 'social',
    meta: { layout: 'main' },
    component: () => import('@/views/Social.vue'),
  },
  {
    path: '/Sets',
    name: 'sets',
    meta: { layout: 'main' },
    component: () => import('@/views/Sets.vue'),
  },
  {
    path: '/Settings',
    name: 'settings',
    meta: { layout: 'main' },
    component: () => import('@/views/Settings.vue'),
  },
  {
    path: '/AddSong',
    name: 'addsong',
    meta: { layout: 'main' },
    component: () => import('@/views/AddSong.vue'),
  },
  {
    path: '/UpdateSong',
    name: 'updatesong',
    meta: { layout: 'main' },
    component: () => import('@/views/UpdateSong.vue'),
  },
  {
    path: '/AddSet',
    name: 'addset',
    meta: { layout: 'main' },
    component: () => import('@/views/AddSet.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
