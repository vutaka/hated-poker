import React from "react"
import styles from "./PlayerPanel.module.scss";
import classnames from "classnames";
import { CurrentBadge } from "../atoms/CurrentBadge";

export function PlayerPanel(props) {

  return (
    <div style={{ width: "300px", margin: "0 auto" }}
      className={classnames(styles.player_panel, props.additionalClassName)}>
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