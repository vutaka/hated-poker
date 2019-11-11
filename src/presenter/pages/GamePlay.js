import React, { useContext, useReducer, useMemo, useEffect, useCallback } from "react"
import classnames from "classnames";
import { CurrentBadge } from "../atoms/CurrentBadge";
import { PlayerBox } from "../molecules/PlayerBox";
import { PlayingPanel } from "../molecules/PlayingPanel";
import { MyInfoContext } from "../../context/MyInfoContextProvider";
import { SymbolCardArea } from "../atoms/SymbolCardArea";
import { SymbolCard } from "../atoms/SymbolCard"
import { Player } from "../../domain/Player";
import { Header } from "../molecules/Header"
import { GamePlayUseCase } from "../../useCase/GamePlayUseCase";
import { GameStatus } from "../../domain/GameStatus";

const gameStatusReducer = (state, action) => {
  const [id, gameStatus] = action;
  console.log(gameStatus);
  return GameStatus.create(gameStatus);
}
const playersReducer = (state, action) => {
  const [id, player] = action;
  console.log(action);
  return (new Map(state)).set(id, Player.create(id, player));
}

export function GamePlay(props) {
  const { limitPlayersNum, myInfo } = useContext(MyInfoContext);
  const [gameStatus, gameStatusDispatch] = useReducer(gameStatusReducer, new GameStatus());
  const [players, playersDispatch] = useReducer(playersReducer, new Map());
  useEffect(() => {
    GamePlayUseCase.listenGamePlay(props.match.params.gameId, playersDispatch, gameStatusDispatch)
    return () => {
      GamePlayUseCase.offListenGamePlay(props.match.params.gameId);
    };
  }, [props.match.params.gameId])

  const selectCard = useCallback(
    (player, cardIndex) => {
      return gameStatus.currentPlayer === myInfo.id
        ? () => (GamePlayUseCase.selectCard(props.match.params.gameId, player, cardIndex, gameStatus))
        : () => { return; };
    }, [gameStatus, myInfo, props]);

  const playersPanel = useMemo(() => {
    const playerPanels = [];
    players.forEach((player) => {
      playerPanels.push(
        <PlayerBox playerName={player.name}>
          <SymbolCardArea >
            {player.field.map((card) =>
              <SymbolCard isSmall={true} isOpen={true} symbolName={card.cardSymbol} key={card.cardSymbol} />
            )}
          </SymbolCardArea>
          <SymbolCardArea cardListSize={player.hand.length}>
            {player.hand.map((card, i) =>
              <SymbolCard
                isOpen={player.id === myInfo.id}
                symbolName={card.cardSymbol}
                key={i}
                onClick={selectCard(player, i)} />
            )}
          </SymbolCardArea>
        </PlayerBox>
      )
    });
    console.log(players)
    console.log(playerPanels)
    return playerPanels;
  }, [players, myInfo, selectCard]);

  return (
    <>
      <Header title="ゲーム中" />
      <PlayingPanel playersNum={limitPlayersNum}>
        {playersPanel}
      </PlayingPanel>
    </>
  )
}
