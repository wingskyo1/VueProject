// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

//init
Vue.use(VueRouter)


//page
import Hello from './components/Hello.vue';
import CtoF from './components/C2F.vue';
import App from './App.vue';

const router = new VueRouter({

  mode:'history',
  base:__dirname,
  //router
  routes:[
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    { 
      path:'/CtoF',
      name:'CtoF',
      component: CtoF
    },

    //redirect
    {path :'/*' ,redirect:'/hello'}
  ]
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  render:h =>h(App)
  // components: { App }
})
