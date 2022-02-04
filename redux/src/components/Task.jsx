import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button.jsx';
import { removeTask, completedTask } from '../actions/tasks.js';

const Task = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(id));
  };
  const handleCompleted = () => {
    dispatch(completedTask(id));
  };

  return (
    <li className="list-item">
      <Button type="checkbox" click={handleCompleted} />
      <span>{id}</span>
      <span className={`${completed ? 'completed' : ''}`}>{title}</span>
      <Button type="button" text="x" click={handleRemove} />
    </li>
  );
};

export default Task;
