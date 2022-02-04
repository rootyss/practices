import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './components/Task.jsx';
import Header from './components/Header.jsx';

const App = () => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "TASKS_FETCH" });
  }, []);

  return (
    <div className="wrap">
      <Header />
      <ul>
        {tasks.map(({ id, title, completed }) => (
          <Task
            key={id}
            id={id}
            title={title}
            completed={completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
