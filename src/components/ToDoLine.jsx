import React, { useState } from "react";
import { ReactComponent as CheckSvg } from "../images/icon-check.svg";
import { ReactComponent as CrossSvg } from "../images/icon-cross.svg";

const ToDoLine = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleMouseOver = (_) => {
    setShowDelete(true);
  };
  const handleMouseLeave = (_) => {
    setShowDelete(false);
  };

  const handleCheck = (e, _id) => {
    e.stopPropagation();
    const stateCopy = [...props.todos];
    const todoIndex = stateCopy.findIndex((todo) => todo._id === _id);
    stateCopy[todoIndex].isComplete = !stateCopy[todoIndex].isComplete;
    props.setTodos(stateCopy);
  };
  const handleDelete = (e, _id) => {
    e.stopPropagation();
    const newState = [...props.todos];
    newState.filter((todo) => todo._id !== _id);
    props.setTodos(newState.filter((todo) => todo._id !== _id));
  };

  return (
    <>
      <div
        className="todo-line-container"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        isdone={`${props?.isComplete}`}
      >
        <div
          className="todo-line-content-container"
          onClick={(e) => handleCheck(e, props._id)}
        >
          <div className="todo-line-check">
            {props?.isComplete && <CheckSvg />}
          </div>
          <p className="todo-line-content">{props.content}</p>
        </div>
        {showDelete && (
          <CrossSvg
            className="todo-line-delete"
            onClick={(e) => handleDelete(e, props._id)}
          />
        )}
      </div>
      <hr className="todo-line-hr" />
    </>
  );
};

export default ToDoLine;
