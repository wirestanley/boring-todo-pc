import Task from "./Task";
import { useState } from "react";

export default function TaskContainer({ tasks }) {
  const [done, setDone] = useState(false);

  return (
    <div>
      {tasks.map((task, index) => {
        return <Task task={task} key={`Task-${index}`} />;
      })}
    </div>
  );
}
