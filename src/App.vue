<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'CtoF'}">CtoF</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import CtoF from './components/C2F.vue'
export default {
  name: 'app',
  components: {
    Hello,
    CtoF
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
