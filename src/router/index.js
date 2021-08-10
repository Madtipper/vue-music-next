import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend');
const Search = () => import('@/views/search');
const Singer = () => import('@/views/singer');
const TopList = () => import('@/views/top-list');

const routes = [
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
