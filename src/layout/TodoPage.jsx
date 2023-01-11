import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";
import "./todoPage.css";

const TodoPage = (props) => {
  const [todos, setTodos] = useState([
    {
      content: "content",
      isComplete: false,
      _id: Date.now(),
    },
  ]);

  const handleThemeChange = (e) => {
    const changeToTheme = {
      dark: "light",
      light: "dark",
    };
    props.setTheme(changeToTheme[props.theme]);
  };

  return (
    <>
      <div className="backgroung-image"></div>
      <div className="todo-page-container">
        <div className="todo-page-container-header">
          <h1>To Do</h1>
          {props.theme === "dark" ? (
            <SunIcon className="theme" onClick={handleThemeChange} />
          ) : (
            <MoonIcon className="theme" onClick={handleThemeChange} />
          )}
        </div>
        <AddTask todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoPage;
