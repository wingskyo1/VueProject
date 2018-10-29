<template>
  <div>
    <!-- loading 放在最外面，讓大家使用。 -->
    <div v-if="loading" class="loader loader-curtain is-active"></div>
    <div class="my-nav">
      <router-link :to="{path: '/hello'}">Hello</router-link>
      <router-link :to="{name: 'CtoF'}">CtoF</router-link>
      <router-link :to="{name: 'CombineCompoment'}">CombineCompoment</router-link>
      <router-link :to="{name: 'Count'}">Count</router-link>
      <router-link :to="{name: 'CountVuex'}">CountVuex</router-link>
      <router-link :to="{name: 'Todo'}">Todo</router-link>
      <router-link :to="{name: 'Shop'}">Shop</router-link>
      <router-link :to="{name: 'Cart'}">Cart</router-link>
      <router-link :to="{name: 'Open1999'}">Open1999</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:
    mapGetters({
      loading: 'getLoading',
    })
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

/* 借來的Loading CSS */
.loader {
  color: #fff;
  position: fixed;
  box-sizing: border-box;
  left: -9999px;
  top: -9999px;
  width: 0;
  height: 0;
  overflow: hidden;
  z-index: 999999;
}
.loader:after,
.loader:before {
  box-sizing: border-box;
}
.loader.is-active {
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.loader-curtain:before,
.loader-curtain:after {
  position: fixed;
  width: 100%;
  top: 50%;
  margin-top: -35px;
  font-size: 70px;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
  line-height: 1.2;
  content: "Loading.......";
}
.loader-curtain:before {
  color: #666;
}
.loader-curtain:after {
  color: #fff;
  height: 0;
  animation: curtain 1s linear infinite alternate both;
}
.loader-curtain[data-curtain-text]:not([data-curtain-text=""]):before,
.loader-curtain[data-curtain-text]:not([data-curtain-text=""]):after {
  content: attr(data-curtain-text);
}
.loader-curtain[data-brazilian]:before {
  color: #f1c40f;
}
.loader-curtain[data-brazilian]:after {
  color: #2ecc71;
}
.loader-curtain[data-colorful]:before {
  animation: maskColorful 2s linear infinite alternate both;
}
.loader-curtain[data-colorful]:after {
  animation: curtain 1s linear infinite alternate both,
    maskColorful-front 2s 1s linear infinite alternate both;
  color: #000;
}
@keyframes maskColorful {
  0% {
    color: #3498db;
  }
  49.5% {
    color: #3498db;
  }
  50.5% {
    color: #e74c3c;
  }
  100% {
    color: #e74c3c;
  }
}
@keyframes maskColorful-front {
  0% {
    color: #2ecc71;
  }
  49.5% {
    color: #2ecc71;
  }
  50.5% {
    color: #f1c40f;
  }
  100% {
    color: #f1c40f;
  }
}
@keyframes curtain {
  0% {
    height: 0;
  }
  100% {
    height: 84px;
  }
}
</style>
