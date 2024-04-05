import React from "react";
import styles from "./BtnStyleText.module.css";

function BtnStyleText({ style, checkFocusBtn, value, clickFn }) {
  const activeBtn = checkFocusBtn.includes(style);

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        clickFn(style);
      }}
      className={activeBtn ? styles.btn_active : styles.btn}
    >
      {value}
    </button>
  );
}

export default BtnStyleText;
