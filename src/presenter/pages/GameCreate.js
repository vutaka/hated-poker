import React, { useState, useEffect } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { Input } from "../atoms/Input";
import { SelectForList } from "../atoms/SelectForList";
import { ButtonField } from "../atoms/ButtonField";
import { Button } from "../atoms/Button";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";

const list = Array.from(Array(5), (v, k) => { return { value: k + 2, text: (k + 2) + "人" } });

export function GameCreate(props) {
  const [name, setName] = useState("");
  const [playersNum, setPlayersNum] = useState(2);
  const createGame = () => {
    GameCreateUseCase.create(name, playersNum).then((id) => {
      props.history.push("/create/" + encodeURI(id));
    });
  };

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
          onClick={createGame}>決定</Button>
      </ButtonField>
    </PreparationTemplate>
  )
}