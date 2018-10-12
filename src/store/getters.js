export const getCount = state => {
  return state.count
}
export const getTodos = state => {
  return state.todo.filter(
      (item) =>{
          return !item.done;
      }
  )
}

export const getDone = state =>{
    return state.todo.filter(
        (item)=>{
            return item.done;
        }
    )
}
