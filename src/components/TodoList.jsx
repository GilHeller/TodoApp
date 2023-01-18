import React, { useEffect } from "react";
import TodoFooter from "./TodoFooter";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
  const itemsLeft = () => {
    return props.todos.filter((todo) => !todo.isComplete).length;
  };
  return (
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
      <TodoFooter itemsLeft={itemsLeft()} todos={props.todos} />
    </div>
  );
};

export default TodoList;
