import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.slice(); // [...tasks]
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Boring To Do List ({tasks.length})</h1>
        <TaskContainer tasks={tasks} removeFunction={removeTask} />
        <TaskForm addFunction={addTask} />
      </header>
    </div>
  );
}

export default App;
