import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from "./views/Index";
import NotFund from "./views/404"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      component: Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },

      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'*',
      name:'404',
      component:NotFund
    }
  ]
})
