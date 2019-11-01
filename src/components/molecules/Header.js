import React from "react";
import styles from "./Header.module.scss"

export function Header(props) {
  return (
    <header className={styles.app_header}>
      <h1 >{props.title}</h1>
    </header>
  )
}