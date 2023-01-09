import React, { useState } from "react";

const Input = (props) => {
  const [taskContent, setTaskContent] = useState("");
  const handleContentChange = (e) => {
    setTaskContent(e.target.value);
  };
  const handleAddTask = () => {
    taskContent &&
      props.setTodos([
        ...props.todos,
        {
          content: taskContent,
          isComplete: false,
          _id: Date.now(),
        },
      ]);
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        id="add-task"
        placeholder="Add task: Go do dev club"
        onChange={handleContentChange}
        value={taskContent}
      />
      <button onClick={handleAddTask}>+</button>
    </div>
  );
};

export default Input;
