import React from "react";
import styles from "./Button.module.scss";

export function Button(props) {
  return(
    <button className={styles.primary_button} onClick={props.onClick} >
      {props.children}
    </button>
  )
}