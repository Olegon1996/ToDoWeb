import React from "react";
import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { themes } from "@storybook/theming";

import ButtonNavigation from "./NavButton";

const label = {
  first: 'All ToDo',
  second: 'Completed',
  third: 'Incompleted',
};

const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
}
storiesOf("Navigation Button", module)
  .addParameters({
    options: {
      showPanel: true,
      theme: themes.light
    }
  })
  .addDecorator(withKnobs)
  .add("Horizontal", () => (
    <ButtonNavigation
      first={select("label1", label, label.first)}
      second={select("label2", label, label.second)}
      third={select("label3", label, label.third)}
      size={select('size', sizes, sizes.small)}
      onClick={action("action")}
    ></ButtonNavigation>
  ))
  .add("Vertical", () => (
    <ButtonNavigation
      first={select("label1", label, label.first)}
      second={select("label2", label, label.second)}
      third={select("label3", label, label.third)}
      size={select('size', sizes, sizes.small)}
      onClick={action("action")}
      style={{
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          width: '100px',
          justifyContent: 'space-between'
      }}
    ></ButtonNavigation>
  ));
