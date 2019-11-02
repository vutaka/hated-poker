import React from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../../components/atoms/Field";
import { Input } from "../../components/atoms/Input";
import { SelectForList } from "../../components/atoms/SelectForList";
import { ButtonField } from "../../components/atoms/ButtonField";
import { Button } from "../../components/atoms/Button";

export function GameCreate() {
  const list = Array.from(Array(5), (v, k) => {return {value: k + 2, text: (k + 2) + "人"}});
  const createGame = () => {window.alert("呼び出し")};
  return(
    <PreparationTemplate title="ゲームを主催する">
      <Field label="あなたのあだ名">
        <Input></Input>
      </Field>
      <Field label="参加人数">
        <SelectForList
          list={list}/>
      </Field>
      <ButtonField>
        <Button onClick={createGame}>決定</Button>
      </ButtonField>
    </PreparationTemplate>
  )
}