import React from "react";
import styles from "./Message.module.scss";

export function Message(props) {
  return (
    <div className={styles.row}>
      <span className={styles.box}>{props.text}</span>
    </div>
  )
}
