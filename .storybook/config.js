import { configure } from "@storybook/react";
import "modern-css-reset";

configure(require.context("./", true, /\.stories\.js$/), module);
