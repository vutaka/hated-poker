
import React, { useState, useEffect, useReducer } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { GameRepository } from "../../repository/GameRepository";
import { Message } from "../atoms/Message";

const reducer = (state, action) => {
  state.push(action);
  return state;
};

export function GameJoinComplete(props) {
  const [ownerName, setOwnerName] = useState("読み込み中...");
  const [players, dispatch] = useReducer(reducer, new Array(0));

  useEffect(() => {
    GameRepository.find(props.match.params.gameId).then((game) => {
      setOwnerName(game.ownerName);
    });
    GameRepository.listenPlayers(props.match.params.gameId, dispatch);
  }, [props.match.params.gameId]);

  return (
    <PreparationTemplate title="ゲームを主催する">
      <Message text={"全員が揃うのをお待ちください" + "が参加中"} />
      <Field label="開催者">
        {ownerName}
      </Field>
      <Field label="参加者">
        {players.map((player, index) => (
          <span key={index}>{player.name}<br/></span>
        ))}
      </Field>
    </PreparationTemplate>
  )
}