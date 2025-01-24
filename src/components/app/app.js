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
      // Test todos
      // this.makeItem('Whassup!'),
      // this.makeItem('Chilling, killing'),
      // this.makeItem('Nothing!')
    ],
    term: '',
    filter: 0, // all = 0, active = 1, done = 2
  };

  minID = 100;

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  toggleProperty = (propName, id, arr) => {
    const idx = arr.findIndex((item) => item.id === id);
    const prev = arr.slice(0, idx);
    const post = arr.slice(idx + 1);
    const oldItem = arr[idx];
    const updatedItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...prev, updatedItem, ...post];
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const prev = todoData.slice(0, idx);
      const post = todoData.slice(idx + 1);
      return {
        todoData: [...prev, ...post],
      };
    });
  };

  addItem = (itemName) => {
    const newItem = this.makeItem(itemName);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty('done', id, todoData),
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty('important', id, todoData) };
    });
  };

  makeItem(label) {
    this.minID += 1;
    return {
      label,
      done: false,
      important: false,
      id: this.minID,
    };
  }

  search(items, term) {
    if (!term.length) return items;
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 0: // All
        return items;
      case 1: // Active
        return items.filter((item) => !item.done);
      case 2: // Done
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  testFn() {
    console.log('test test');
  }
  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const notDoneCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={notDoneCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onDone={this.toggleDone}
          onImportant={this.toggleImportant}
        />
        <NewBtn onCreate={(txt) => this.addItem(txt)} />
      </div>
    );
  }
}
