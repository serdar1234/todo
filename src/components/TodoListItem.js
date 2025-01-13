import React from "react";

const ToDoListItem = ({ num, arr = ["Nothing", "Chilling, killing"] }) => {
  return (

      <span>{arr[num]}</span>

  )
}

export default ToDoListItem;