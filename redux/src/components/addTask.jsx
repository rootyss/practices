import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button.jsx';
import { addTask } from '../actions/tasks.js';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addtaskhandler = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title: text }));
    setText('');
  };

  return (
    <form onSubmit={addtaskhandler}>
      <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
      <Button type="submit" text="add task" />
    </form>
  );
};

export default AddTask;
