import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styles from "./Input.module.scss";

export function Input(props, ref) {
  const inputEl = useRef(null);
  useImperativeHandle(ref, () => ({
    select: () => {
      inputEl.current.select();
    }
  }));
  return (
    <input
      className={styles.input}
      ref={inputEl}
      {...props} />
  )
}
Input = forwardRef(Input);