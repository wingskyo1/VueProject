//types
const types = {
    ADDTODO: 'todo/CREATE_TODO',
    TOGGLETODO: 'todo/TOGGLE_TODO',
    DELETETODO: 'todo/DELETE_TODO',
    UPDATETODO: 'todo/UPDATE_TODO',

}

//state
const state = {
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
}


//getters
const getters = {
  getTodos : state => {
    return state.todo.filter(
      (item) => {
        return !item.done;
      }
    )
  },
  getDone : state => {
    return state.todo.filter(
      (item) => {
        return item.done;
      }
    )
  }
}




//Actions
const actions = {
  addTodo({
    commit
  }, newTodo) {
    console.log('addTodo2');
    commit(types.ADDTODO, newTodo);
  },
  toggleTodo({
    commit
  }, key) {
    console.log('toggle key = ' + key);
    commit(types.TOGGLETODO, key);
  },
  deleteTodo({
    commit
  }, key) {
    console.log('delete key = ' + key);
    commit(types.DELETETODO, key);
  },
  updateTodo({
    commit
  }, obj) {
    console.log('update key11111 = ', obj);
    commit(types.UPDATETODO, obj);
  },

}
let todoKey = state.todo.length;
//mutations
const mutations = {
    [types.ADDTODO](state, newTodo) {
        state.todo.push({
          key: todoKey,
          content: newTodo,
          done: false
        });
        todoKey++;
      },
      [types.TOGGLETODO](state, key) {
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
      [types.DELETETODO](state,key){
        for(var i in state.todo){
          var target = state.todo[i];
          if(target.key === key){
            //移除
            state.todo.splice(i,1);
          }
        }
      },
      [types.UPDATETODO] (state, obj) {
        console.log("mutations");
        console.log("state ", state);
        for(var i in state.todo){
          var item = state.todo[i];
          if ( item.key === obj.key){
            console.log('UPDATE_TODO:', item.content, ' to →', obj.updateString);
            item.content = obj.updateString;
            break;
          }
        }
        console.log("mutations over");
      },

}


//export

export default {
    state,
  getters,
  actions,
  mutations,
}
