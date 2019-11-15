import React, { useContext, useState, useMemo, useEffect, useCallback } from "react"
import { PlayerBox } from "../molecules/PlayerBox";
import { PlayingPanel } from "../molecules/PlayingPanel";
import { MyInfoContext } from "../../context/MyInfoContextProvider";
import { SymbolCardArea } from "../atoms/SymbolCardArea";
import { SymbolCard } from "../atoms/SymbolCard"
import { Header } from "../molecules/Header"
import { GamePlayUseCase } from "../../useCase/GamePlayUseCase";
import { GameInfoContext } from "../../context/GameInfoContextProvider";
import { CardPassSelectDialog } from "../templates/CardPassSelectDialog";
import { CardInferDialog } from "../templates/CardInferDialog";
import { StepIndicatorArea } from "../atoms/StepIndicatorArea";
import { StepIndicator } from "../atoms/StepIndicator";
import cardSymbol from "../../domain/CardSymbol";

export function GamePlay(props) {
  const { limitPlayersNum, myInfo } = useContext(MyInfoContext);
  const { gameStatus, gameStatusDispatch, players, playersDispatch, isOver , initContextValue} = useContext(GameInfoContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    GamePlayUseCase.listenGamePlay(props.match.params.gameId, playersDispatch, gameStatusDispatch)
    return () => {
      GamePlayUseCase.offListenGamePlay(props.match.params.gameId);
    };
  }, [props.match.params.gameId, playersDispatch, gameStatusDispatch])
  
  useEffect(() => {
    if (isOver) props.history.push("/play/" + props.match.params.gameId + "/complete");
    return initContextValue();
  }, [isOver, props])


  const selectCard = useCallback(
    (player, cardIndex) => () => {
      GamePlayUseCase.selectCard(cardIndex, player, gameStatus, playersDispatch, gameStatusDispatch);
      setIsDialogOpen(true);
    }
    , [gameStatus, playersDispatch, gameStatusDispatch]);

  const playersPanel = useMemo(() => {
    const playerPanels = [];
    players.forEach((player) => {
      playerPanels.push(
        <PlayerBox playerName={player.name}>
          <SymbolCardArea >
            {player.field.map((card, i) =>
              <SymbolCard
                isSmall={true}
                isOpen={true}
                symbolName={card.cardSymbol}
                key={gameStatus.currentPlayer + "field" + card.cardSymbol + i} />
            )}
          </SymbolCardArea>
          <SymbolCardArea cardListSize={player.hand.length}>
            {player.hand.map((card, i) => (
              (gameStatus.currentPlayer === myInfo.id && gameStatus.isFirst()) ?
                (<SymbolCard
                  isOpen={player.id === myInfo.id}
                  symbolName={card.cardSymbol}
                  key={gameStatus.currentPlayer + "hand" + card.cardSymbol + i}
                  onClick={selectCard(player, i)} />)
                : (<SymbolCard
                  isOpen={player.id === myInfo.id}
                  symbolName={card.cardSymbol}
                  key={gameStatus.currentPlayer + "hand" + card.cardSymbol + i} />)
            )
            )}
          </SymbolCardArea>
        </PlayerBox>
      )
    });
    return playerPanels;
  }, [players, myInfo, selectCard, gameStatus]);

  const gameIndicator = useMemo(() => {
    if (!gameStatus.order.filter(element => players.get(element.playerId)) || !players.get(gameStatus.currentPlayer)) return (<></>);
    return (
      <>
        {
          gameStatus.order.map(element =>
            (
              <StepIndicator
                title={players.get(element.playerId).name + "の番"}
                text={"これは「" + cardSymbol[element.cardSymbol] + "」です。"} />
            )
          )}
        <StepIndicator
          title={(myInfo.id === gameStatus.currentPlayer ? "あなた" : players.get(gameStatus.currentPlayer).name) + "の番"}
          text="考え中🤔"
          isCurrent={true} />
      </>
    )
  }, [players, gameStatus, myInfo])

  return (
    <>
      <Header title="ゲーム中" />
      <StepIndicatorArea>
        {gameIndicator}
      </StepIndicatorArea>
      {
        (Boolean(players.get(gameStatus.currentPlayer))) &&
        <PlayingPanel
          onAction={() => { if (Boolean(gameStatus.currentCard.cardSymbol)) { return setIsDialogOpen(true) } }}
          showMessage={myInfo.id === gameStatus.currentPlayer}
          text="あなたの番です"
          playersNum={limitPlayersNum}>
          {playersPanel}
        </PlayingPanel>
      }
      {
        myInfo.id === gameStatus.currentPlayer &&
        (
          (gameStatus.isFirst() || gameStatus.isGoThrough) ?
            (<CardPassSelectDialog
              isOpen={isDialogOpen}
              gameId={props.match.params.gameId}
              close={() => (setIsDialogOpen(false))} />)
            : (
              <CardInferDialog
                isOpen={isDialogOpen}
                gameId={props.match.params.gameId}
                close={() => (setIsDialogOpen(false))} />
            ))
      }

    </>
  )
}
