import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";
import "./todoPage.css";
import ThemeIcon from "../components/ThemeIcon";

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

  const onAddTask = (taskContent) => {
    taskContent &&
      setTodos([
        ...todos,
        {
          content: taskContent,
          isComplete: false,
          _id: Date.now(),
        },
      ]);
  };

  return (
    <>
      <div className="backgroung-image"></div>
      <div className="todo-page-container">
        <div className="todo-page-container-header">
          <h1>To Do</h1>
          <ThemeIcon
            className="theme"
            theme={props.theme}
            onClick={handleThemeChange}
          />
        </div>
        <AddTask onAddTask={onAddTask} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoPage;
