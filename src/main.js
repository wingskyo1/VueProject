// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

//init
Vue.use(VueRouter)


//page
import Hello from './page/Hello.vue';
import CtoF from './page/C2F.vue';
import CombineCompoment from './page/CombineCompoment.vue'
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
    { 
      path:'/CombineCompoment',
      name:'CombineCompoment',
      component: CombineCompoment
    },
    //redirect
    {path :'/*' ,redirect:'/hello'}
  ]
})



/* eslint-disable no-new */
new Vue({

  // components: { App }
  el: '#app',
  // router 掛載設定
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
})
