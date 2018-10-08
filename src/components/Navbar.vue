<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <a class="navbar-brand" href="#">vue & vuex 2.0</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
       <!-- 這段slot會插在右邊 -->
        <form class="navbar-form navbar-right">
          <slot name="right">
            <!-- 根據使用Navbar component的頁面可以自訂意 -->
          </slot>
        </form>
      </div>
      <!--/.navbar-collapse -->
    </div>
  </nav>
</template>

<script>

</script>

<style>

</style>
