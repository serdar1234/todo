import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onDone, onImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onDone={() => onDone(id)}
          onImportant={() => onImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onDone: PropTypes.func,
  onImportant: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onDone: () => {},
  onImportant: () => {},
};

export default TodoList;
