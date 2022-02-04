export const fetchTodosMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'TASKS_FETCH') {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((json) => storeAPI.dispatch({ type: 'TASKS_LOADED', payload: { tasks: json } }));
  }

  return next(action);
};
