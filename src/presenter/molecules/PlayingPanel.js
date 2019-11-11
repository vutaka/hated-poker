import React from "react";
import styles from "./PlayingPanel.module.scss"
import { ContentPanel } from "../atoms/ContentPanel"
import classnames from "classnames"
import { Button } from "../atoms/Button";

export function PlayingPanel(props) {
  const columnsClassName = "player_columns_" + Math.ceil(props.playersNum / 2);
  return (
    <ContentPanel >
      {props.showMessage && (<div
        className={styles.row}>
        <div className={styles.border}>
          <span className={styles.box}>{props.text}</span>
          <Button onClick={props.onAction} additionalClass={styles.button}>行動</Button>
        </div>
      </div>)
      }
      <div className={classnames(styles.playing_panel, styles[columnsClassName])}>
        {props.children}
      </div>
    </ContentPanel>
  );
}