import React from "react"
import styles from "./SymbolCardArea.module.scss";
import classnames from "classnames"

export function SymbolCardArea(props) {

  return (
    <div
      className={classnames(styles.cardArea, { [styles.with_small]: props.isSmall })}
      style={{ gridTemplateColumns: "repeat(" + (props.cardListSize ? props.cardListSize : 8) + ", 1fr)" }}>
      {props.children}
    </div>
  )
}