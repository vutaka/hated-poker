// コンテキストプロバイダーコンポーネント
import React, { useState, useReducer } from "react";
import { Player } from "../domain/Player";

const MyInfoContext = React.createContext();

const myInfoReducer = (state, action) => {
  return new Player(action.name, action.id);
}
const otherInfosReducer = (state, [key, value]) => {
  return [...state, value];
}

function MyInfoContextProvider(props) {
  // useReducerでreducer関数と初期値をセット
  const [myInfo, myInfoDispatch] = useReducer(myInfoReducer, null);
  const [othersInfo, othersInfoDispatch] = useReducer(otherInfosReducer, new Array(0));
  const [limitPlayersNum, setLimitPlayersNum] = useState(0);
  const value = { limitPlayersNum, setLimitPlayersNum, myInfo, myInfoDispatch, othersInfo, othersInfoDispatch };

  return (
    // コンテキストプロバイダーとしてuseReducerのstateとdispatchをコンテキストに設定
    <MyInfoContext.Provider value={value}>
      {props.children}
    </MyInfoContext.Provider>
  );
};

export {
  MyInfoContext,
  MyInfoContextProvider
}