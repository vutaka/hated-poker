
import React, { useState, useEffect } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { TextCopy } from "../molecules/TextCopy";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { QRCode } from "../atoms/QRCode";
import { GameRepository } from "../../repository/GameRepository";
import { ButtonField } from "../atoms/ButtonField";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function GameJoin(props) {
  const [ownerName, setOwnerName] = useState("読み込み中...");
  const [myName, setMyName] = useState("");

  useEffect(() => {
    GameRepository.find(props.match.params.gameId).then((game) => {
      setOwnerName(game.ownerName);
    });
  }, [props.match.params.gameId]);

  const joinGame = () => {
    GameCreateUseCase.join(props.match.params.gameId, myName).then((myId) => {
      props.history.push("/join/" + props.match.params.gameId + "/complete");
    })
  }
  return (
    <PreparationTemplate title="ゲームを主催する">
      <Field label="開催者">
        {ownerName}
      </Field>
      <Field label="あなたのアダ名">
        <Input
          onChange={(e) => setMyName(e.target.value)} />
      </Field>
      <ButtonField>
        <Button onClick={joinGame}>参加</Button>
      </ButtonField>
    </PreparationTemplate>
  )
}