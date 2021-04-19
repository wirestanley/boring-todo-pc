import Task from "./Task";
export default function TaskContainer({ tasks, removeFunction }) {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task
            task={task}
            key={`Task-${index}`}
            index={index}
            removeFunction={removeFunction}
          />
        );
      })}
    </div>
  );
}
