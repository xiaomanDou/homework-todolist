import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';

function App() {
  

  return (
    <div className="App">
     <TodoListHeader />
     <TodoList />
    </div>
  );
}

export default App;
