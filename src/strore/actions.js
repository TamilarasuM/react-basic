let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
//   })