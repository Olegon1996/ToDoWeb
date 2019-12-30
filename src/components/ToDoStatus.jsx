import React from "react";
import "../style.css";
import NavBtn from "./NavigationButton/NavButton";

export default function ToDoStatus() {
  return (

      <NavBtn
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "85px",
          justifyContent: "space-between",
          order: '0',
          backgroundColor: 'rgba(161, 40, 77, 0.49)',
          zIndex: '1',
        }}
        first="All"
        second="Done"
        third="Not Done"
        size="large"
      ></NavBtn>

  );
}
