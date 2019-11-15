// コンテキストプロバイダーコンポーネント
import React, { useState, useEffect, useReducer, useContext } from "react";
import { Player } from "../domain/Player";
import { Game } from "../domain/Game"
import { GameStatus } from "../domain/GameStatus";
import { MyInfoContext } from "./MyInfoContextProvider";


const GameInfoContext = React.createContext();

const gameStatusReducer = (state, action) => {
  const [id, gameStatus] = action;
  console.log(action);
  return GameStatus.create(gameStatus);
}
const playersReducer = (state, action) => {
  const [id, player] = action;
  console.log(action);
  return (new Map(state)).set(id, Player.create(id, player));
}

function GameInfoContextProvider(props) {
  // useReducerでreducer関数と初期値をセット
  const [gameStatus, gameStatusDispatch] = useReducer(gameStatusReducer, new GameStatus());
  const [players, playersDispatch] = useReducer(playersReducer, new Map());
  const [gameReady, setGameReady] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const { limitPlayersNum } = useContext(MyInfoContext);
  useEffect(() => {
    if (players.size === limitPlayersNum && Boolean(gameStatus.currentPlayer)) setGameReady(true);
  }, [gameStatus, players, limitPlayersNum])
  useEffect(() => {
    if(Boolean(gameStatus.loser)) setIsOver(true);
  }, [gameStatus.loser])
  
  const initContextValue = () => {
    setIsOver(false);
    setGameReady(false);
  }
  
  const value = { gameStatus, gameStatusDispatch, players, playersDispatch, gameReady, isOver, initContextValue};

  return (
    // コンテキストプロバイダーとしてuseReducerのstateとdispatchをコンテキストに設定
    <GameInfoContext.Provider value={value}>
      {props.children}
    </GameInfoContext.Provider>
  );
};

export {
  GameInfoContext,
  GameInfoContextProvider
}