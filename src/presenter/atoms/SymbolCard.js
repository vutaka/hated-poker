import React from "react"
import styles from "./SymbolCard.module.scss";
import classnames from "classnames"

const getSymbolName = (name) => {
  switch (name) {
    case "rat":
      return styles.rat;
    case "dog":
      return styles.dog;
    case "snake":
      return styles.snake;
    case "jellyfish":
      return styles.jellyfish;
    case "bat":
      return styles.bat;
    case "deer":
      return styles.deer;
    case "shark":
      return styles.shark;
    case "crow":
      return styles.crow;
    default:
      break;
  }
}

export function SymbolCard(props) {
  return (
    <div className={classnames(styles.cardWrapper, { [styles.small]: props.isSmall }, getSymbolName(props.symbolName))}>
      <div
        className={classnames(styles.card,
          { [styles.open]: props.isOpen },
          { [styles.small]: props.isSmall }
        )}
        onClick={props.onClick}>
        <div className={styles.front} />
        <div className={styles.back}></div>
      </div>
    </div>
  )
}