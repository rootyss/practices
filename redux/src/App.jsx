import React from 'react';
import { useSelector } from 'react-redux';
import Task from './components/Task.jsx';
import Header from './components/Header.jsx';

const App = () => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);

  return (
    <div className="wrap">
      <Header />
      <ul>
        {tasks.map(({ id, title }) => <Task key={id} id={id} title={title} />)}
      </ul>
    </div>
  );
};

export default App;
