import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => (
  <li className="list-item">
    <input type="checkbox" readOnly checked={todo.completed} />
    <span>{todo.title}</span>
  </li>
  );

export default TodoItem;