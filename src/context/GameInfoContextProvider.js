// コンテキストプロバイダーコンポーネント
import React, { useState, useReducer } from "react";
import { Player } from "../domain/Player";
import {Game} from "../domain/Game"


const GameInfoContext = React.createContext();

const gameStatusReducer = (state, action) => {

}
const playersReducer = (state, action) => {
  return (new Map(state)).set(...action);
}

function GameInfoContextProvider(props) {
  // useReducerでreducer関数と初期値をセット
  const [gameStatus, gameStatusDispatch] = useReducer(gameStatusReducer, null);
  const [players, playersDispatch] = useReducer(playersReducer, null);
  const value = { gameStatus, gameStatusDispatch, players, playersDispatch };

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