import { configure, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "modern-css-reset";
import "../src/style/global.scss"


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
configure(require.context("./", true, /\.stories\.js$/), module);