import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boring To Do List</h1>
        <TaskForm />
      </header>
    </div>
  );
}

export default App;
