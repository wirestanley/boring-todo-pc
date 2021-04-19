export default function TaskContainer({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <li>{task}</li>;
      })}
    </div>
  );
}
