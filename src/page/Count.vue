<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <button @click="increase"> + </button>
    <button @click="decrease"> - </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    increase () {
      this.count += 1;
    },
    decrease () {
      this.count -= 1;
    },
  }
}
</script>

<style>
  .count {
    color: red;
  }
</style>