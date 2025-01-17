import React, { Component } from 'react';

import './todo-list-item.css';

export default class ToDoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick() {
    this.setState( ({done}) => {
      return {done: !done}
    } )
  }

  onExclamation() {
    this.setState( (state) => {
      return {important: !state.important}
    } )
  }

  render() {
    let { done, important } = this.state;
    const { label, onDeleted } = this.props;
    let classNames = "todo-list-item";

    if (done)       classNames += " done";
    if (important)  classNames += " important"

    return (
      <span className= { classNames }>
        <span
          className="todo-list-item-label"
          onClick={ () => this.onLabelClick()}>
          {label}
        </span>
  
        <button type="button"
          onClick={ () => this.onExclamation() } className="btn btn-outline-success btn-sm float-right">
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