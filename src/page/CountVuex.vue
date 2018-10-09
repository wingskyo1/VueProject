<template>
  <div class="container">
    <h2>count:<span class="count"> {{ this.count }}</span></h2>
    <button @click="actionIncrease"> + </button>
    <button @click="actionDecrease"> - </button>
  </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count :'getCount',
    }),
  },
  methods: {
    ...mapActions ([
      'actionIncrease',
      'actionDecrease'
    ]),
    callAction(){
      this.actionIncrease
    }
  },
}
</script>

<style>
  .count {
    color: red;
  }
</style>