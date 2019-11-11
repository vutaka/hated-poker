import React from "react";
import styles from "./SelectForList.module.scss";

export function SelectForList(props) {
  return (
    <select className={styles.select} value={props.value} defaultValue={props.defaultValue} onChange={props.onChange}>
      {props.list.map(element =>
        (<option value={element.value} key={element.value}>{element.text}</option>)
      )}
    </select>
  )
}