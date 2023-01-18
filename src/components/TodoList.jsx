import React, { useEffect, useState } from "react";
import TodoFooter from "./TodoFooter";
import ToDoLine from "./ToDoLine";

const TodoList = (props) => {
  const FILTER_ALL_KEY = "all";
  const FILTER_ACTIVE_KEY = "active";
  const FILTER_COMPLETED_KEY = "completed";
  const [filterMethod, setFilterMethod] = useState("all");
  const [shownList, setShownList] = useState([...props.todos]);

  const onFilterAll = () => {
    setShownList([...props?.todos]);
  };
  const onFilterActive = () => {
    const filteredList = props.todos?.filter((todo) => !todo.isComplete);
    setShownList(filteredList);
  };
  const onFilterCompleted = () => {
    const filteredList = props.todos?.filter((todo) => todo.isComplete);
    setShownList(filteredList);
  };
  const filterOptions = {
    [FILTER_ACTIVE_KEY]: onFilterActive,
    [FILTER_COMPLETED_KEY]: onFilterCompleted,
    [FILTER_ALL_KEY]: onFilterAll,
  };
  const itemsLeft = () => {
    return props.todos?.filter((todo) => !todo.isComplete)?.length || 0;
  };
  const onAllFilter = () => {
    setFilterMethod(FILTER_ALL_KEY);
  };
  const onActiveFilter = () => {
    setFilterMethod(FILTER_ACTIVE_KEY);
  };
  const onCompleteFilter = () => {
    setFilterMethod(FILTER_COMPLETED_KEY);
  };
  useEffect(() => {
    filterOptions[filterMethod]();
  }, [props.todos, filterMethod]);

  return (
    <div className="todo-list-container">
      <div className="todo-list-content">
        {shownList?.map((todo) => (
          <ToDoLine
            {...todo}
            key={todo._id}
            onCheckTask={props.onCheckTask}
            onDeleteTask={props.onDeleteTask}
          ></ToDoLine>
        ))}
      </div>
      <TodoFooter
        filterMethod={filterMethod}
        itemsLeft={itemsLeft()}
        onAllFilter={onAllFilter}
        onActiveFilter={onActiveFilter}
        onCompleteFilter={onCompleteFilter}
      />
    </div>
  );
};

export default TodoList;
