import Task from "./Task";

export default function TaskContainer({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </div>
  );
}
