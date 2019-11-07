import React, { useState, useContext } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { Input } from "../atoms/Input";
import { SelectForList } from "../atoms/SelectForList";
import { ButtonField } from "../atoms/ButtonField";
import { Button } from "../atoms/Button";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { MyInfoContext } from "../../context/MyInfoContextProvider";

const list = Array.from(Array(5), (v, k) => { return { value: k + 2, text: (k + 2) + "人" } });

export function GameCreate(props) {
  const [name, setName] = useState("");
  const [playersNum, setPlayersNum] = useState(2);
  const { setLimitPlayersNum, myInfoDispatch } = useContext(MyInfoContext);
  const createAndJoinGame = () => {
    setLimitPlayersNum(playersNum);
    GameCreateUseCase.create(name, playersNum).then(([gameId, myId]) => {
      myInfoDispatch({ name: name, id: myId });
      props.history.push("/create/" + encodeURI(gameId));
    });
  }
  return (
    <PreparationTemplate title="ゲームを主催する">
      <Field label="あなたのあだ名">
        <Input
          onChange={(e) => setName(e.target.value)} />
      </Field>
      <Field label="参加人数">
        <SelectForList
          list={list}
          onChange={(e) => setPlayersNum(e.target.value)} />
      </Field>
      <ButtonField>
        <Button
          onClick={createAndJoinGame}>決定</Button>
      </ButtonField>
    </PreparationTemplate>
  )
}