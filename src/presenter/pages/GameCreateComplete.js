import React, { useState } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { Field } from "../atoms/Field";
import { TextCopy } from "../molecules/TextCopy";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { QRCode } from "../atoms/QRCode";

export function GameCreateComplete(props) {
  const invitationURL = document.location.origin + "/join/" + props.match.params.gameId;
  
  return (
    <PreparationTemplate title="ゲームを主催する">
      <Field label="招待URL">
        <TextCopy
          value={invitationURL}/>
      </Field>
      <Field label="招待QRコード">
        <QRCode
          encodedURL={invitationURL}/>
      </Field>
    </PreparationTemplate>
  )
}