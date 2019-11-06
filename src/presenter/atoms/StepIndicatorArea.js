import React from "react";
import styles from "./StepIndicatorArea.module.scss";

export function StepIndicatorArea(props) {
  return (<div className={styles.area}>
    {props.children}
  </div>);
}