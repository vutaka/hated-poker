import React from "react";
import { StepIndicator } from "../src/presenter/atoms/StepIndicator";
import { StepIndicatorArea } from "../src/presenter/atoms/StepIndicatorArea";

export default { title: "StepIndicatorArea" };

export const withIn = () =>
  <StepIndicatorArea>
    <StepIndicator />
  </StepIndicatorArea>

export const withInMax = () =>
  <StepIndicatorArea>
    <StepIndicator />
    <StepIndicator isCurrent={true} />
    <StepIndicator />
    <StepIndicator />
    <StepIndicator />
    <StepIndicator />
  </StepIndicatorArea>