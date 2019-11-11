import React from "react";
import { PlayingPanel } from "../src/presenter/molecules/PlayingPanel";

export default { title: "PlayingPanel" };

export const normal_2 = () => (
  <PlayingPanel showText={true} text={"あなたの番です"} playersNum={2}>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>

  </PlayingPanel>
);

export const normal_3 = () => (
  <PlayingPanel playersNum={3}>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>

  </PlayingPanel>
);

export const normal_6 = () => (
  <PlayingPanel playersNum={6}>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
    <div style={{width:"100%"}}>あ</div>
  </PlayingPanel>
);