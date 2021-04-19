import style from "../styles/Task.module.css";

export default function Task({ task }) {
  return (
    <div className={style.container}>
      <p className={style.text}>{task}</p>
      <div className={style.buttonWrapper}>
        <input type="checkbox"></input>
        <p>X</p>
      </div>
    </div>
  );
}
