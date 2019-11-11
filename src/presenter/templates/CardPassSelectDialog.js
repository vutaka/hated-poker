import React, { useState, useContext, useMemo } from "react";
import { ActionSelection } from "../molecules/ActionSelection";
import { SymbolCard } from "../atoms/SymbolCard";
import { Button } from "../atoms/Button";
import { GameInfoContext } from "../../context/GameInfoContextProvider";
import cardSymbol from "../../domain/CardSymbol";
import { Field } from "../atoms/Field";
import { SelectForList } from "../atoms/SelectForList";
import { GamePlayUseCase } from "../../useCase/GamePlayUseCase";

export function CardPassSelectDialog(props) {

  const { gameStatus, players } = useContext(GameInfoContext);
  const playersListForSelect = useMemo(() => {
    const playersList = [];
    const orderdId = gameStatus.order.map(player => player.playerId);
    for (const [key, player] of players) {
      if (gameStatus.currentPlayer !== key && orderdId.indexOf(key) < 0 ) {
        playersList.push({ value: player.id, text: player.name });
      }
    }
    return playersList;
  }, [gameStatus, players]);
  const [selectedPlayer, setSelectedPlayer] = useState(playersListForSelect.length > 0 ? playersListForSelect[0].value : null);
  const [selectedSymbol, setSelectedSymbol] = useState("rat");
  console.log(gameStatus);
  console.log(players);
  return (
    <ActionSelection
      isOpen={props.isOpen}
      onRequestClose={props.close}
      cardSlot={
        <SymbolCard
          symbolName={gameStatus.currentCard.cardSymbol}
          isOpen={true} />
      }
      contentSlot={
        <>
          <Field label="これは">
            <SelectForList
              value={selectedSymbol}
              list={Object.entries(cardSymbol).map(([key, value]) => ({ value: key, text: value }))}
              onChange={(e) => setSelectedSymbol(e.target.value)} />
          </Field>
          <Field label="誰に渡す">
            <SelectForList
              list={playersListForSelect}
              value={selectedPlayer}
              onChange={(e) => setSelectedPlayer(e.target.value)} />
          </Field>
        </>
      }
      buttonSlot={
        <>
          <Button
            onClick={() => {
              GamePlayUseCase.passCard(props.gameId, players.get(gameStatus.currentPlayer), gameStatus, selectedPlayer, selectedSymbol);
              props.close();
            }}
            disabled={playersListForSelect.length === 0}
          >決定</Button>
          <Button onClick={props.close}>考えなおす</Button>
        </>
      }
    />
  )
}