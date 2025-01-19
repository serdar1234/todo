import React from 'react';

import './todo-list-item.css';

function ToDoListItem(props) {
  const { label, done, important,
    onDeleted, onDone, onImportant
    } = props;
  let classNames = "todo-list-item";

  if (done)       classNames += " done";
  if (important)  classNames += " important"

  return (
    <span className= { classNames }>
      <span
        className="todo-list-item-label"
        onClick={ onDone}>
        {label}
      </span>

      <button type="button"
        onClick={ onImportant } className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        onClick={ onDeleted } className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default ToDoListItem;