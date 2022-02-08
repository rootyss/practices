import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './store/';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { IUser, ITodo } from './types/types';

import "./style.scss";

const App = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
  ));

const [users, setUsers] = useState<IUser[]>([]);
  const [todo, setTodo] = useState<ITodo[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => response.json())
  .then((json:ITodo[]) => setTodo(json));
  }, [])
  
  return (
    <Provider store={store}>
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
  </Provider>
)};

export default App;
