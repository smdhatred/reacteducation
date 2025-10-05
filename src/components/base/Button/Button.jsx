import style from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button {...props} className={isActive ? style.buttonActive : style.button}>
      {children}
    </button>
  );
}
