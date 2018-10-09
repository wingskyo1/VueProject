<template>
  <div>
    <div class="my-nav">
      <router-link :to="{path: '/hello'}">Hello</router-link>
      <router-link :to="{name: 'CtoF'}">CtoF</router-link>
      <router-link :to="{name: 'CombineCompoment'}">CombineCompoment</router-link>
      <router-link :to="{name: 'Count'}">Count</router-link>
      <router-link :to="{name: 'CountVuex'}">CountVuex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  .my-nav {
    position: fixed;
    top: 60px;
    padding: 0 10px;
  }
  .my-nav a {
    display: block;
    margin-bottom: 10px;
  }
</style>
