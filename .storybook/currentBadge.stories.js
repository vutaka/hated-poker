import React from "react";
import { CurrentBadge } from "../src/presenter/atoms/CurrentBadge";


export default { title: "CurrentBadge" };

export const normal = () => <div style={{ padding: "100px" }}><CurrentBadge></CurrentBadge></div>;
export const withOnClick = () => <div style={{ padding: "100px" }}><CurrentBadge onClick={() => (alert("呼ばれた"))}></CurrentBadge></div>;
