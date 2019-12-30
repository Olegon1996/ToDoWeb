import React from "react";
import { action } from "@storybook/addon-actions";
import { select, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  withLiveEdit,
  withLiveEditScope
} from "storybook-addon-react-live-edit";
import { themes } from "@storybook/theming";

import Button from "./ButtonAdd";

const colors = {
  default: "default",
  primary: "primary",
  secondary: "secondary"
};

const sizes = {
  small: "small",
  medium: "medium",
  large: "large"
};
storiesOf("Buttons", module)
  .addParameters({
    options: {
      showPanel: true,
      theme: themes.light
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withLiveEditScope({ React, Button }))
  .add(
    "Live Source",
    withLiveEdit(`return <Button style={{
    height: 'auto',
    width: 'auto',
    backgroundColor: 'none', 
    fontSize: 19,
    borderRadius: '8px',
    }}
    ></Button>;`)
  )
  .add("Standard", () => (
    <Button
      color={select("color", colors, colors.default)}
      size={select("Size", sizes, sizes.small)}
      onClick={action("action")}
    >
    </Button>
  ))
  .add("Primary", () => (
    <Button
      color={select("color", colors, colors.primary)}
      size={select("Size", sizes, sizes.medium)}
      onClick={action("action")}
    >
    </Button>
  ))
  .add("Secondary", () => (
    <Button
      color={select("color", colors, colors.secondary)}
      size={select("Size", sizes, sizes.large)}
      onClick={action("action")}
    >
    </Button>
  ));