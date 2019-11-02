import React from "react";
import styles from "./ButtonField.module.scss";

export function ButtonField(props) {
  return (
    <div className={styles.button_field}>
        {props.children}
    </div>
  )
}
