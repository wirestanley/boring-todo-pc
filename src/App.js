import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import TaskContainer from "./components/TaskContainer";
import BoringContainer from "./components/BoringContainer"

function App() {
  const [tasks, setTasks] = useState([]);

  const [color,setColor] = useState ('#282c34')
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.slice(); // [...tasks]
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const randomBg = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    const newColor = '#' + random;
    setColor(newColor)
  }

  return (
    <div className="App">
      <header className="App-header" style= {{backgroundColor: color}}>
        <h1>Boring To Do List ({tasks.length})</h1>
        <TaskContainer tasks={tasks} removeFunction={removeTask} />
        <TaskForm addFunction={addTask} />
        <BoringContainer addTask = {addTask} setBgColor ={randomBg}/>
      </header>
    </div>
  );
}

export default App;
