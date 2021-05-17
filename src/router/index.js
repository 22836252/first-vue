import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import button from '@/components/button'
// import ctof from '@/page/ctof'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    // {
    //   path: '/button',
    //   name: 'button',
    //   component: button
    // },
    // {
    //   path: '/ctof',
    //   name: 'ctof',
    //   component: ctof
    // },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
})
