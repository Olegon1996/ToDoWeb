import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function FloatingActionButtons({ color, size, style, onClick }) {

  return (
      <Fab
        color={color}
        size={size}
        style={style}
        onClick={onClick}
        aria-label="add"
      >
        <AddIcon />
      </Fab>

  );
}
