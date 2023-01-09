import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";

const TodoPage = (props) => {
  const [todos, setTodos] = useState([
    {
      content: "content",
      isComplete: false,
      _id: Date.now(),
    },
  ]);

  return (
    <>
      {/* <img
        className="backgroung-image"
        alt="backgroung"
        src="bg-desktop-light.jpg"
      /> */}
      <div className="backgroung-image"></div>
      <div className="todo-page-container">
        <h1>To Do

        <AddTask todos={todos} setTodos={setTodos} />
        </h1>
        
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoPage;
