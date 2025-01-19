import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import NewBtn from '../new-btn/NewBtn';

import './app.css';

export default class App extends Component {

  minID = 100;
  state = {
    todoData: [
      this.makeItem('Whassup!'),
      this.makeItem('Chilling, killing'),
      this.makeItem('Nothing!')
    ]
  }

  makeItem(label) {
    return {
      label, done: false,
      important: false,
      id: ++this.minID
    }
  }

  toggleProperty = (propName, id, arr) => {
    const idx = arr.findIndex(item => item.id === id);
    const prev = arr.slice(0, idx);
    const post = arr.slice(idx + 1);
    const oldItem = arr[idx];
    const updatedItem = {...oldItem, [propName]: !oldItem[propName]}
    return [...prev, updatedItem, ...post]
  }
  
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
  
  addItem = (itemName) => {
    const newItem = this.makeItem(itemName)
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  }
  
  toggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty('done', id, todoData)
      }
    })
  }

  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {todoData: this.toggleProperty("important", id, todoData)}
    })
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const notDoneCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={notDoneCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={todoData}
          onDeleted={this.deleteItem}
          onDone={this.toggleDone}
          onImportant={this.toggleImportant}
           />
        <NewBtn onCreate={(txt) => this.addItem(txt)} />
      </div>
    );
  }
};