import React from "react";

const TodoFooter = (props) => {
  return (
    <div className="todo-footer-container">
      <p>{props.itemsLeft} items left</p>
      <button className="todo-footer-button" onClick={props.onAllFilter}>
        All
      </button>
      <button className="todo-footer-button" onClick={props.onActiveFilter}>
        Active
      </button>
      <button className="todo-footer-button" onClick={props.onCompleteFilter}>
        Completed
      </button>
    </div>
  );
};

export default TodoFooter;
