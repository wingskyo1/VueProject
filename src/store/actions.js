
import * as types from './mutations_type'

export const actionIncrease = ({commit}) => {
  console.log('actionIncrease');
  commit(types.INCREASE)
}

export const actionDecrease = ({commit}) => {
  console.log('actionDecrease');
  commit(types.DECREASE)
}

export const addTodo = ({commit} , newTodo) => {
  console.log('addTodo2');
  commit(types.ADDTODO,newTodo);
}

export const toggleTodo = ({commit},key) =>{
console.log ('toggle key = '+key);
commit(types.TOGGLETODO,key);
}


export const deleteTodo = ({commit},key)=>{
  console.log ('delete key = '+key);
  commit(types.DELETETODO,key);
}

export const updateTodo =({commit},obj) =>{
  console.log('update key11111 = ',obj);
  commit(types.UPDATETODO,obj);
}

