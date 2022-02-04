export const addTask = (task) => ({ type: "TASK_ADD", payload: { task } });

export const removeTask = (id) => ({ type: "TASK_REMOVE", payload: { id } });

export const completedTask = (id) => ({ type: "TASK_COMPLETED", payload: { id } });
