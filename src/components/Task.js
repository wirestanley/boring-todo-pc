import style from "../styles/Task.module.css";
import { useState } from "react";

export default function Task({ task }) {
  const [done, setDone] = useState(false);
  const handleChange = () => {
    setDone(!done);
    console.log(done);
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
        <p>X</p>
      </div>
    </div>
  );
}
