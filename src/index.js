import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';


const App = () => {
  return (
    <div>
      < AppHeader />
      < SearchPanel />
      < ToDoList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
