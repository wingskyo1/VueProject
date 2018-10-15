import * as types from './mutations_type.js'
// import Vue from 'vue'

export const state = {
  count: 0,
  todo: [{
      key: 0,
      content: 'test',
      done: false
    },
    {
      key: 1,
      content: 'Ok',
      done: true
    },
    {
      key: 2,
      content: 'Third',
      done: false
    },
    {
      key: 3,
      content: 'try',
      done: true
    }
  ]
};

let todoKey = state.todo.length;



export const mutations = {

  [types.INCREASE](state) {
    state.count += 1;
  },

  [types.DECREASE](state) {
    state.count -= 1;
  },

  [types.ADDTODO](state, newTodo) {
    state.todo.push({
      key: todoKey,
      content: newTodo,
      done: false
    });
    todoKey++;
  },
  [types.TOGGLE](state, key) {
    for (var i in state.todo) {
      console.log(i + "== " +key);
      console.log(i == key);
      var target = state.todo[i];
      if (target.key === key) {
        state.todo[i].done = !state.todo[i].done ;
        console.log("key : "+ key +" change to :" + i.done)
        break;
      }
    }
  },
  [types.DELETE](state,key){
    for(var i in state.todo){
      var target = state.todo[i];
      if(target.key === key){
        //移除
        state.todo.splice(i,1);
      }
    }

  }
};
