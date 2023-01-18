import React, { useEffect } from "react";

const TodoFooter = (props) => {
    console.log(props.todos.filter(todo => !todo.isChecked).length);
    return (
        <div className="todo-footer-container">
            <p>{props.itemsLeft} items left</p>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
        </div>
    );
}

export default TodoFooter;