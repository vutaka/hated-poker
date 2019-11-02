import React from "react";
import styles from "./Field.module.scss";

export function Field(props) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.item}>
        {props.children}
      </span>
    </div>
  )
}
