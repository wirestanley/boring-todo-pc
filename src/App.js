import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boring To Do List</h1>
        <TaskForm addFunction={addTask} />
      </header>
    </div>
  );
}

export default App;
