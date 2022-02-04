import { fetchTasks } from '../actions/tasks.js';

const initialState = {
  tasks: [
    { id: 1, title: 'test task 1', completed: false },
    { id: 2, title: 'test task 2', completed: false },
    { id: 3, title: 'test task 3', completed: false },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      return { ...state, tasks: [...state.tasks, task] };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      return { ...state, tasks: state.tasks.filter((t) => t.id !== id) };
    }
    case "TASKS_LOADED": {
      const { tasks } = action.payload;
      return { ...state, tasks };
    }
    case "TASK_COMPLETED": {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === id
          ? { ...task, completed: !task.completed }
          : task)),
      };
    }
    default:
      return state;
  }
};

export const fetchTodos = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((resp) => resp.json())
    .then((tasks) => dispatch(fetchTasks(tasks)));
};
