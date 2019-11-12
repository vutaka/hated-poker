import React, { useState, useContext } from "react";
import { ActionSelection } from "../molecules/ActionSelection";
import { SymbolCard } from "../atoms/SymbolCard";
import { Button } from "../atoms/Button";
import { GameInfoContext } from "../../context/GameInfoContextProvider";
import cardSymbol from "../../domain/CardSymbol";
import { GamePlayUseCase } from "../../useCase/GamePlayUseCase";

export function CardInferDialog(props) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { gameStatus, players, gameStatusDispatch } = useContext(GameInfoContext);
  const goThrough = () => {
    setIsCardOpen(true);
    alert(cardSymbol[gameStatus.currentCard.cardSymbol] + "でした。");
    gameStatus.isGoThrough = true;
    gameStatusDispatch([null, gameStatus]);
    props.close();
  }
  const believe = () => {
    setIsCardOpen(true);
    alert(cardSymbol[gameStatus.currentCard.cardSymbol] + "でした。");
    GamePlayUseCase.believe(props.gameId, gameStatus);
    props.close();
  }
  const doubt = () => {
    setIsCardOpen(true);
    alert(cardSymbol[gameStatus.currentCard.cardSymbol] + "でした。");
    GamePlayUseCase.doubt(props.gameId, gameStatus);
    props.close();
  }
  return (
    <ActionSelection
      isOpen={props.isOpen}
      onRequestClose={props.close}
      cardSlot={
        <SymbolCard
          symbolName={gameStatus.currentCard.cardSymbol}
          isOpen={isCardOpen} />
      }
      contentSlot={
        players.get(gameStatus.order[gameStatus.order.length - 1].playerId).name + "さん「これは" + cardSymbol[gameStatus.order[gameStatus.order.length - 1].cardSymbol] + "です。」"
      }
      buttonSlot={
        <>
          <Button onClick={believe}>その通り</Button>
          <Button onClick={doubt}>嘘乙</Button>
          {gameStatus.order.length < players.size - 1 && <Button onClick={goThrough}>パスする</Button>}
          <Button onClick={props.close}>考える</Button>
        </>
      }
    />
  )
}