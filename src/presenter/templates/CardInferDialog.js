import React, { useState, useContext } from "react";
import { ActionSelection } from "../molecules/ActionSelection";
import { SymbolCard } from "../atoms/SymbolCard";
import { Button } from "../atoms/Button";
import { GameInfoContext } from "../../context/GameInfoContextProvider";
import cardSymbol from "../../domain/CardSymbol";

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
          <Button>その通り</Button>
          <Button>嘘乙</Button>
          <Button onClick={goThrough}>パスする</Button>
          <Button onClick={props.close}>考える</Button>
        </>
      }
    />
  )
}