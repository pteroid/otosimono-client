import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Dashboard from '@/views/Dashboard'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/items/:id',
      name: 'detail',
      component: Detail,
      props: route => ({id: Number(route.params.id)})
    }
  ]
})
