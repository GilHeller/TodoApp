import React, { useEffect, useState } from "react";
import TodoFooter from "./TodoFooter";
import ToDoLine from "./ToDoLine";
import config from "../config.json";

const TodoList = (props) => {
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
    [config.filterByActiveKey]: onFilterActive,
    [config.filterByCompletedKey]: onFilterCompleted,
    [config.filterDefaultKey]: onFilterAll,
  };
  const itemsLeft = () => {
    return props.todos?.filter((todo) => !todo.isComplete)?.length || 0;
  };
  const onAllFilter = () => {
    setFilterMethod(config.filterDefaultKey);
  };
  const onActiveFilter = () => {
    setFilterMethod(config.filterByActiveKey);
  };
  const onCompleteFilter = () => {
    setFilterMethod(config.filterByCompletedKey);
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
