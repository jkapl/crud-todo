import React from 'react';
import { TodoList } from './features/todoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todos</h1>
      </header>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
