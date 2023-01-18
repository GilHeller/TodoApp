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

  const [filteredList, setFilteredList] = useState();

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

  const onCheckTask = (_id) => {
    const newState = [...todos];
    const todoIndex = newState.findIndex((todo) => todo._id === _id);
    newState[todoIndex].isComplete = !newState[todoIndex].isComplete;
    setTodos(newState);
  };

  const onDeleteTask = (_id) => {
    const newState = [...todos];
    newState.filter((todo) => todo._id !== _id);
    setTodos(newState.filter((todo) => todo._id !== _id));
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
        <TodoList
          todos={todos}
          setTodos={setTodos}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </>
  );
};

export default TodoPage;
