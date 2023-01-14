import React from "react";
import { ReactComponent as CheckSvg } from "../images/icon-check.svg";
import { ReactComponent as CrossSvg } from "../images/icon-cross.svg";

const ToDoLine = (props) => {
  return (
    <>
      <div
        className="todo-line-container"
        isdone={`${props?.isComplete}`}
      >
        <div
          className="todo-line-content-container"
          onClick={() => props.onCheckTask(props._id)}
        >
          <div className="todo-line-check">
            {props?.isComplete && <CheckSvg />}
          </div>
          <p className="todo-line-content">{props.content}</p>
        </div>
          <CrossSvg
            className="todo-line-delete"
            onClick={() => props.onDeleteTask(props._id)}
          />
      </div>
      <hr className="todo-line-hr" />
    </>
  );
};

export default ToDoLine;
