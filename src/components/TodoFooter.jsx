import React from "react";
import config from "../config.json";

const TodoFooter = (props) => {
  return (
    <div className="todo-footer-container">
      <p>{props.itemsLeft} items left</p>
      <hr className="todo-footer-seperator"/>
      <p
        className="todo-footer-button"
        active={`${props.filterMethod === config.filterDefaultKey}`}
        onClick={props.onAllFilter}
      >
        All
      </p>
      <p
        className="todo-footer-button"
        active={`${props.filterMethod === config.filterByActiveKey}`}
        onClick={props.onActiveFilter}
      >
        Active
      </p>
      <p
        className="todo-footer-button"
        active={`${props.filterMethod === config.filterByCompletedKey}`}
        onClick={props.onCompleteFilter}
      >
        Completed
      </p>
    </div>
  );
};

export default TodoFooter;
