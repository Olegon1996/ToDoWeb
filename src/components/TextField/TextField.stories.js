import React from "react";
import { action } from "@storybook/addon-actions";
import { select, color, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import {
  withLiveEdit,
  withLiveEditScope
} from "storybook-addon-react-live-edit";
import { themes } from "@storybook/theming";

import TextField from "./TextField";

const variant = {
  Standard: "standard",
  Filled: "filled",
  Outlined: "outlined"
};

const label = {
  Standard: "Standard",
  Filled: "Filled",
  Outlined: "Outlined"
};

const colors = {
  default: "default",
  primary: "primary",
  secondary: "secondary"
};

const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };
storiesOf("Text Field", module)
  .addParameters({
    options: {
      showPanel: true,
      theme: themes.light
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withLiveEditScope({ React, TextField }))
  .add(
    "Live Source",
    withLiveEdit(`return <TextField style={{
    height: 'auto',
    width: 'auto',
    backgroundColor: 'none', 
    fontSize: 19,
    borderRadius: '8px',
    }} 
    label="Standart" 
    variant="standard"
    ></TextField>;`)
  )
  .add("Standard", () => (
    <TextField
      variant={select("variant", variant, variant.Standard)}
      label={select("label", label, label.Standard)}
      color={select("color", colors, colors.default)}
      size={select('Size', sizes, sizes.small)}
      style={{
        backgroundColor: color("Background", "none"),
        width: `${number('Width', 160)}px`,
        fontSize: `${number('Font Size', 21)}px`
      }}
      onChange={action("action")}
    ></TextField>
  ))
  .add("Filled", () => (
    <TextField
      variant={select("variant", variant, variant.Filled)}
      label={select("label", label, label.Filled)}
      color={select("color", colors, colors.primary)}
      size={select('Size', sizes, sizes.medium)}
      style={{
        backgroundColor: color("Background", "none"),
        width: `${number('Width', 160)}px`,
        fontSize: `${number('Font Size', 21)}px`
      }}
      onChange={action("action")}
    ></TextField>
  ))
  .add("Outlined", () => (
    <TextField
      variant={select("variant", variant, variant.Outlined)}
      label={select("label", label, label.Outlined)}
      color={select("color", colors, colors.secondary)}
      size={select('Size', sizes, sizes.large)}
      style={{
        backgroundColor: color("Background", "none"),
        width: `${number('Width', 160)}px`,
        fontSize: `${number('Font Size', 21)}px`
      }}
      onChange={action("action")}
    ></TextField>
  ));