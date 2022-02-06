import React, { useState, useEffect } from 'react';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { IUser, ITodo } from './types/types';

import "./style.scss";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todo, setTodo] = useState<ITodo[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((json:IUser[]) => setUsers(json));

  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => response.json())
  .then((json:ITodo[]) => setTodo(json));
  })

  return (
  <div>
     <List
       items={users}
       renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
     />
     <List
       items={todo}
       renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
     />
  </div>
)};

export default App;
