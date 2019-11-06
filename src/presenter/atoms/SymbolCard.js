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
    <div className={styles.cardWrapper}>
      <div
        className={classnames(styles.card,
          { [styles.small]: props.isSmall },
          { [styles.open]: props.isOpen },
          props.additionalClassName
        )}
        onClick={props.onClick}>
        <div className={classnames(styles.front, getSymbolName(props.symbolName))} />
        <div className={styles.back}></div>
      </div>
    </div>
  )
}