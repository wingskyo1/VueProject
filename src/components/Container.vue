<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" v-for="item in passInList">
        <h2>{{item.title}}</h2>
        <p>{{item.info}}</p>
        <p><a class="btn btn-default" href="#" role="button">{{item.btntext}}</a></p>
      </div>
    </div>
    <hr>
    <footer>
      <p>Vue Practing
      </p>

    </footer>
  </div>
  <!-- /container -->
</template>

<script>
  export default {
    // vue option 當中有 props 開發區域
    props: {
      // attribute name: Type
      passInList: Array
    },
  }
</script>

<style>

</style>
