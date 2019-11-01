import React from "react";
import styles from "./ContentPanel.module.scss";

export function ContentPanel(props) {
  return(
    <article className={styles.content}>
      {props.children}
    </article>
  )
}