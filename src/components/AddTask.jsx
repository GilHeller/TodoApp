import React, { useState } from "react";

const Input = (props) => {
  const [taskContent, setTaskContent] = useState("");
  const handleContentChange = (e) => {
    setTaskContent(e.target.value);
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
      <button onClick={() => props.onAddTask(taskContent)}>+</button>
    </div>
  );
};

export default Input;
