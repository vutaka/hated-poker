import React from "react"
import styles from "./CurrentBadge.module.scss";
import classnames from "classnames"

export function CurrentBadge(props) {

  return (
    <div
      className={classnames(styles.current, props.additionalClassName)}
      onClick={props.onClick} />
  )
}