// get count & todo
export const getCountandTodo = state => {
  return {
    count: state.count.count,
    todo: state.todo.todo,
  }
}

// just return all state
export const getAllstate = state => state