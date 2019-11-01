import React from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../../components/atoms/Field";
import { Input } from "../../components/atoms/Input";
import { SelectForList } from "../../components/atoms/SelectForList";

export function GameCreate(props) {
  const list = Array.from(Array(5), (v, k) => {return {value: k + 2, text: (k + 2) + "人"}});
  return(
    <PreparationTemplate title="ゲームを主催する">
      <Field label="あなたのあだ名">
        <Input></Input>
      </Field>
      <Field label="参加人数">
        <SelectForList
          list={list}/>
      </Field>
    </PreparationTemplate>


  )
}