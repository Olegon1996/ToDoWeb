import React from "react";
import { action } from "@storybook/addon-actions";
import { select, withKnobs, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";

import Badge from "./Badge";

const colors = {
  default: "default",
  primary: "primary",
  secondary: "secondary"
};


storiesOf("Badge", module)
  .addParameters({
    options: {
      showPanel: true,
      theme: themes.light
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => (
    <Badge
      color= 'primary'
      badgeContent= '100'
      max={number("max number", 10)}
    ></Badge>
  ))
  .add("With Knobs", () => (
    <Badge
      color={select("color", colors, colors.primary)}
      badgeContent={number("number", 1)}
      max={number("max number", 10)}
    ></Badge>
  ));
