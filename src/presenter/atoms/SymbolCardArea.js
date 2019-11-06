import React from "react"
import styles from "./SymbolCardArea.module.scss";

export function SymbolCardArea(props) {

  return (
    <div
      className={styles.cardArea}
      style={{ "grid-template-columns": "repeat(" + (props.cardListSize ? props.cardListSize : 8) + ", 1fr)" }}>
      {props.children}
    </div>
  )
}