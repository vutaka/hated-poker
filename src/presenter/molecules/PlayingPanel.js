import React from "react";
import styles from "./PlayingPanel.module.scss"
import { ContentPanel } from "../atoms/ContentPanel"
import classnames from "classnames"

export function PlayingPanel(props) {
  const columnsClassName = "player_columns_" + Math.ceil(props.playersNum / 2);
  return (
    <ContentPanel additionalClassName={classnames(styles.playing_panel, styles[columnsClassName])}>
      {props.children}
    </ContentPanel>
  );
}