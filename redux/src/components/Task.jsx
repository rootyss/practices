import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button.jsx';

const Task = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "TASK_REMOVE", payload: { id } });
  };

  return (
    <li className="list-item">
      <Button type="checkbox" />
      <span>{id}</span>
      <span>{title}</span>
      <Button type="button" text="x" click={handleClick} />
    </li>
  );
};

export default Task;
