
import React, { useState, useEffect, useContext } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { Message } from "../atoms/Message";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { MyInfoContext } from "../../context/MyInfoContextProvider";

export function GameJoinComplete(props) {
  const [ownerName, setOwnerName] = useState("読み込み中...");
  const { limitPlayersNum, othersInfo, othersInfoDispatch } = useContext(MyInfoContext);

  useEffect(() => {
    GameCreateUseCase.load(props.match.params.gameId).then((game) => {
      setOwnerName(game.ownerName);
    });
    GameCreateUseCase.listenPlayer(props.match.params.gameId, othersInfoDispatch);
    GameCreateUseCase.listenStartGame(props.match.params.gameId, () => {
      props.history.push("/play/" + props.match.params.gameId);
    });

    return () => {
      GameCreateUseCase.offListenPlayer(props.match.params.gameId);
      GameCreateUseCase.offListenStartGame(props.match.params.gameId);
    };
  }, [props, othersInfoDispatch]);

  return (
    <PreparationTemplate title="ゲームを主催する">
      <Message text={"全員が揃うのをお待ちください。" + othersInfo.length + "/" + limitPlayersNum + "が待機中"} />
      <Field label="開催者">
        {ownerName}
      </Field>
      <Field label="参加者">
        {othersInfo.map((player, index) => (
          <span key={index}>{player.name}<br /></span>
        ))}
      </Field>
    </PreparationTemplate>
  )
}