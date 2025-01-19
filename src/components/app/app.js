import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import NewBtn from '../new-btn/NewBtn';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Whassup!', important: false, id: 1 },
      { label: 'Chilling, killing', important: true, id: 2 },
      { label: 'Nothing', important: false, id: 3 }
    ]
  }
  minID = 100;

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);
      const prev = todoData.slice(0, idx);
      const post = todoData.slice(idx + 1);
      return {
        todoData: [...prev, ...post]
      }
    })
  }

  createItem = () => {
    const newItem = {
      label: `Brand new item ${this.minID + 1}`,
      important: false,
      id: this.minID++
    }
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
           />
        <NewBtn onCreate={() => this.createItem()} />
      </div>
    );
  }
};