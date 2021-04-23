import style from "../styles/Button.module.css";

export default function Button({ color, text, onClick }) {
  return (
    <div>
      <button style ={{backgroundColor: color && color}}  className={style.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
