import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: require('@/components/Login.vue'),
    },
    {
      path: '/',
      component: require('@/components/Main.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
