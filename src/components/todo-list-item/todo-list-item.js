import React, { Component } from 'react';

import './todo-list-item.css';

export default class ToDoListItem extends Component {
  onLabelClick() {
    this.setState( ({done}) => {
      return {done: !done}
    } )
  }

  render() {
    const { label, onDeleted, done, important,
      onDone, onImportant
     } = this.props;
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
}