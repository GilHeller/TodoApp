import React, { useState } from "react";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
    const onAddTodo = (task) => {
        props.setTodos([
            ...props.todos,
            {
                content: 'content',
                isComplete: false,
            }
        ])
    }

    return(
        <>
            <div className="todo-list-container">
                {props.todos.map((todo, id) => (<ToDoLine {...todo} key={id}></ToDoLine>))}
            </div>
        </>
    )
    
}

export default TodoList