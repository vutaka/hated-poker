import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export function Button(props) {
  return(
    <button
      className={classNames(styles.primary_button, props.additionalClass)}
      onClick={props.onClick} >
      {props.children}
    </button>
  )
}