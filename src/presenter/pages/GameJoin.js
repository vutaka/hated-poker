
import React, { useState, useEffect, useContext } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { ButtonField } from "../atoms/ButtonField";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { MyInfoContext } from "../../context/MyInfoContextProvider";

export function GameJoin(props) {
  const [ownerName, setOwnerName] = useState("読み込み中...");
  const [myName, setMyName] = useState("");
  const { setLimitPlayersNum, myInfoDispatch } = useContext(MyInfoContext);

  useEffect(() => {
    GameCreateUseCase.load(props.match.params.gameId).then((game) => {
      setOwnerName(game.ownerName);
      setLimitPlayersNum(game.playersNum);
    });
  }, [props, setOwnerName, setLimitPlayersNum]);

  const joinGame = () => {
    GameCreateUseCase.join(props.match.params.gameId, myName).then((myId) => {
      myInfoDispatch({ id: myId, name: myName });
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