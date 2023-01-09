import React, { useState } from 'react';

import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([{
    content: 'content',
    isComplete: false,
  }]);
  
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
