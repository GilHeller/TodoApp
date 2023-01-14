import React from "react";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
  return (
    <>
      <div className="todo-list-container">
        <div className="todo-list-content">
          {props.todos.map((todo) => (
            <ToDoLine
              {...todo}
              key={todo._id}
              onCheckTask={props.onCheckTask}
              onDeleteTask={props.onDeleteTask}
            ></ToDoLine>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default TodoList;
