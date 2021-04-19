import { useState } from "react";
import Button from "./Button";

export default function TaskForm({ addFunction }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setTask(value);
  };

  const handleClick = () => {
    console.log("click");
    task && addFunction(task);
  };

  return (
    <div>
      <textarea placeholder="Type your task" onChange={handleChange}></textarea>
      <Button text="Add Task" onClick={handleClick} />
    </div>
  );
}
