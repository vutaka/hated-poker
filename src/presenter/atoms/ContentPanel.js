import React from "react";
import styles from "./ContentPanel.module.scss";
import classnames from "classnames";

export function ContentPanel(props) {
  return(
    <div className={classnames(styles.content, props.additionalClassName)}>
      {props.children}
    </div>
  )
}