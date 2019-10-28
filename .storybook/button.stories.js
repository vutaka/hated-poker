import React from "react";
import { Button } from "../src/components/atoms/Button";
import "modern-css-reset"

export default { title: "Button" };

export const withText = () => <Button>ほげ</Button>;

export const withEvent = () => <Button onClick={() => window.alert("eventがでる")}>ほげ</Button>;