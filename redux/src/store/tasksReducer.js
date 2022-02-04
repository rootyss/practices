const initialState = {
  tasks: [
    { id: 1, title: 'test task 1' },
    { id: 2, title: 'test task 2' },
    { id: 3, title: 'test task 3' },
  ],
};

export default (action, state = initialState) => {
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      return { ...state, tasks: [...state.tasks, task] };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      return { ...state, tasks: state.tasks.filter((t) => t.id !== id) };
    }
    default:
      return state;
  }
};
