import React, { useState } from 'react';
import TodoPage from './layout/TodoPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className='app-content' theme={theme}>
      <TodoPage theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
