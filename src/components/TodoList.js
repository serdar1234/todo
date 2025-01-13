import React from "react";
import ToDoListItem from "./TodoListItem";

const ToDoList = () => {
  return (
    <ul>
      <li><ToDoListItem num = "0" /></li>
      <li><ToDoListItem num = "1" /></li>
    </ul>
  )
}

export default ToDoList;