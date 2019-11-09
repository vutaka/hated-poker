import React from "react"
import styles from "./PlayerBox.module.scss";
import classnames from "classnames";
import { CurrentBadge } from "../atoms/CurrentBadge";

export function PlayerBox(props) {

  return (
    <div className={classnames(styles.player_box, props.additionalClassName)}>
      <div className={styles.name_wrapper}>
        <h2 className={styles.player_name}>{props.playerName}</h2>
        {props.isCurrent && (
          <CurrentBadge additionalClassName={styles.badge} onClick={props.onBadgeClick} />
        )}
      </div>
      <div className={styles.card_field}>
          {props.children}
      </div>
    </div>
  )
}