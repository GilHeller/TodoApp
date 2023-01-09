import React, { useState } from "react";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
    return(
        <>
            <div className="todo-list-container">
                {props.todos.map((todo, _) => (
                    <ToDoLine 
                        {...todo} key={todo._id}
                        setTodos={props.setTodos} todos={props.todos}
                    ></ToDoLine>
                ))}
            </div>
        </>
    )
    
}

export default TodoList