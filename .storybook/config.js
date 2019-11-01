import { configure } from "@storybook/react";
import "modern-css-reset";
import "../src/style/global.scss"

configure(require.context("./", true, /\.stories\.js$/), module);
