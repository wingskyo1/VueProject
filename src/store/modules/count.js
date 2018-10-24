
const types = {
    INCREASE: 'count/INCREASE',
    DECREASE: 'count/DECREASE',
  }

//state
 const state = {
    count : 0
};

  //getters
  const getters ={
    getCount: state =>state.count,
}

// actions
const actions ={
  actionIncrease ({commit}){
    console.log('actionIncrease');
    commit(types.INCREASE);
  },
  
    actionDecrease ({commit}) {
    console.log('actionDecrease');
    commit(types.DECREASE);
  }
}
  //mutations
const mutations = {
    [types.INCREASE](state){
        state.count++;
        console.log("count++");
    },
    [types.DECREASE](state){
        state.count--;
        console.log("count--");
    }
}
  export default{
      state,
      getters,
      actions,
      mutations,
  }



