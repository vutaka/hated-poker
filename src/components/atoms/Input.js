import React from "react";
import styles from "./Input.module.scss";

export function Input(props) {
  return (
    <input className={styles.input} {...props} />
  )
}