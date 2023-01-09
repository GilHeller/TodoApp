import React from "react";
// import CheckSvg from "../../images/icon-check.svg";
import { ReactComponent as CheckSvg } from "../images/icon-check.svg";

const ToDoLine = (props) => {
    console.log(props);
    
    return (
        <div className="todo-line-container">
            <div className="todo-line-check">
                {props?.isComplete && <CheckSvg/>}
            </div>
            <p>{props.content}</p>
        </div>
    )
}

export default ToDoLine;