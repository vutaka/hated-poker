import React, { useEffect, useContext } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { TextCopy } from "../molecules/TextCopy";
import { QRCode } from "../atoms/QRCode";
import { MyInfoContext } from "../../context/MyInfoContextProvider";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";

export function GameCreateComplete(props) {
  const invitationURL = document.location.origin + "/join/" + props.match.params.gameId;
  const { myInfo, limitPlayersNum, othersInfo, othersInfoDispatch } = useContext(MyInfoContext);

  useEffect(() => {
    GameCreateUseCase.listenPlayer(props.match.params.gameId, othersInfoDispatch);
    return () => {
      GameCreateUseCase.offListenPlayer(props.match.params.gameId);
    };
  }, [props.match.params.gameId, othersInfoDispatch])

  useEffect(() => {
    if (limitPlayersNum <= othersInfo.length) {
      GameCreateUseCase.startGame(props.match.params.gameId, myInfo.id).then(() =>
        props.history.push("/play/" + props.match.params.gameId)
      );
    }
  }, [limitPlayersNum, othersInfo, props, myInfo])

  return (
    <PreparationTemplate title="ゲームを主催する">
      <Field label="招待URL">
        <TextCopy
          value={invitationURL} />
      </Field>
      <Field label="招待QRコード">
        <QRCode
          encodedURL={invitationURL} />
      </Field>
      <Field label="参加者">
        {othersInfo.map((player, index) => (
          <span key={index}>{player.name}<br /></span>
        ))}
      </Field>
    </PreparationTemplate>
  )
}