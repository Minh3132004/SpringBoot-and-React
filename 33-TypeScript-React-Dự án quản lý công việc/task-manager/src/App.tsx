import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from "./component/TaskList";


function App() {
  return (
    <div className="App">
        <h1>Task Manager</h1>
        {<TaskList/>}
    </div>
  );
}

export default App;
