import React, { useState, useEffect, useContext } from "react";
import { PreparationTemplate } from "../templates/PreparationTemplate";
import { ButtonField } from "../atoms/ButtonField";
import { Button } from "../atoms/Button";
import { GameCreateUseCase } from "../../useCase/GameCreateUseCase";
import { GamePlayUseCase } from "../../useCase/GamePlayUseCase";
import { MyInfoContext } from "../../context/MyInfoContextProvider";
import { Message } from "../atoms/Message";
import { Player } from "../../domain/Player";


export function GamePlayComplete(props) {
  const [loser, setLoser] = useState(new Player());
  const { myInfo } = useContext(MyInfoContext);
  const doRestart = () => {
    GameCreateUseCase.startGame(props.match.params.gameId, myInfo.id);
  }
  useEffect(() => {
    GamePlayUseCase.getLoser(props.match.params.gameId).then(
      (resultLoser) => setLoser(resultLoser)
    );
    GameCreateUseCase.listenReStartGame(props.match.params.gameId, () => {
      props.history.push("/play/" + props.match.params.gameId);
    });
    return () => {
      GameCreateUseCase.offListenReStartGame(props.match.params.gameId);
    };
  }, [])
  return (
    <PreparationTemplate title="ゲームを主催する">
      <Message text={((myInfo.id === loser.id) ? "あなた" : loser.name ) + "が敗北者。"  + ((myInfo.id !== loser.id) ? "敗北者をお待ちください。": "")} />
      {myInfo.id === loser.id && (
        <ButtonField>
          <Button
            onClick={doRestart}>もう一度遊ぶ</Button>
        </ButtonField>
      )}
    </PreparationTemplate>
  )
}