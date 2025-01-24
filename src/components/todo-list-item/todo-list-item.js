import React from 'react';
import PropTypes from 'prop-types';

import './todo-list-item.css';

const ToDoListItem = (props) => {
  const { label, done, important, onDeleted, onDone, onImportant } = props;
  let classNames = 'todo-list-item';

  if (done) classNames += ' done';
  if (important) classNames += ' important';

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onDone} role="button" tabIndex={0}>
        {label}
      </span>

      <button
        type="button"
        onClick={onImportant}
        className="btn btn-outline-success btn-sm float-right"
        aria-label="Important task"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        onClick={onDeleted}
        className="btn btn-outline-danger btn-sm float-right"
        aria-label="Delete this task"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

ToDoListItem.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  important: PropTypes.bool,
  onDeleted: PropTypes.func,
  onDone: PropTypes.func,
  onImportant: PropTypes.func,
};

ToDoListItem.defaultProps = {
  label: '',
  done: false,
  important: false,
  onDeleted: () => {},
  onDone: () => {},
  onImportant: () => {},
};

export default ToDoListItem;
