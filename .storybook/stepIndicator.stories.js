import React from "react";
import { StepIndicator } from "../src/presenter/atoms/StepIndicator";

export default { title: "StepIndicator" };

export const nonText = () => <>
        <div style={{ width: "300px", display: "inline-block" }}><StepIndicator /></div>
        <div style={{ width: "300px", display: "inline-block" }}><StepIndicator isCurrent={true} /></div>
    </>

export const withText = () => <>
        <div style={{ width: "300px", display: "inline-block" }}><StepIndicator title={"ゴールドマウンテンさんの番"} text={"これはネズミです"} /></div>
        <div style={{ width: "300px", display: "inline-block" }}><StepIndicator isCurrent={true} title={"ゴールドマウンテンさんの番"} text={"これはネズミです"} /></div>
    </>
