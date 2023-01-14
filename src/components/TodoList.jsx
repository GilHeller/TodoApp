import React from "react";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list-content">
        {props.todos.map((todo, _) => (
          <ToDoLine
            {...todo}
            key={todo._id}
            setTodos={props.setTodos}
            todos={props.todos}
          ></ToDoLine>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
