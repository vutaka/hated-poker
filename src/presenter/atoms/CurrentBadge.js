import React from "react"
import styles from "./CurrentBadge.module.scss";

export function CurrentBadge(props) {

  return (
    <div
      className={styles.current}
      onClick={props.onClick} />
  )
}