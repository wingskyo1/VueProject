import * as rootypes from '../mutations_types';

//types
const types = {
    OPEN1999 : 'OPEN1999',
   

}
//state
const state = {
    opendata : [],
}
//getters
const getters={
  getOpen1999 : state=> state.opendata,
}
//actions
const actions = {
    open1999 ({ commit }) {
        // 啟動 loading
        commit(rootypes.LOADING, true);
        // use fetch call open 1999 API
        fetch('https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery')
          .then(function(response) {
            // fetch 有 'ok' 物件可以判斷 response state 是不是 200
            // 將資料處理成 JSON
            if(response.ok) {
              return response.json();
            } 
            else {
              console.error(response);
              commit(rootypes.LOADING, false);
            }
          })
          .then(function(data) {
            // 把 json 傳給 mutation
            commit(types.OPEN1999, data);
            // 關閉 loading
            commit(rootypes.LOADING, false);
          })
          .catch(function(error) {
            console.error(error);
            commit(rootypes.LOADING, false);
          });
      },    
}
//mutations
const mutations = {
    [types.OPEN1999] (state, data) {
      state.opendata = data;
    },
  }
  

export default{
    state,
    getters,
    actions,
    mutations
}
