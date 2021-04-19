import style from "../styles/Task.module.css";
import { useState } from "react";

export default function Task({ task, index, removeFunction }) {
  const [done, setDone] = useState(false);
  const handleChange = () => {
    setDone(!done);
    console.log(done);
  };

  const handleClick = () => {
    removeFunction(index);
  };

  return (
    <div className={style.container}>
      <p
        className={style.text}
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {task}
      </p>
      <div className={style.buttonWrapper}>
        <input type="checkbox" onChange={handleChange}></input>
        <p onClick={handleClick}>X</p>
      </div>
    </div>
  );
}
