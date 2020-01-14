import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import '../../style.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    "& > *": {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f50057',
      },
    },
    '& > label': {
      color: 'red'
    },
  }
}));

export default function BasicTextFields({
  variant,
  label,
  color,
  onChange,
  style,
  value,
  inputStyle,
  labelStyle
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label={label}
        variant={variant}
        color={color}
        onChange={onChange}
        style={style}
        value={value}
        inputProps={{ style: inputStyle}}
        InputLabelProps={{style: labelStyle}}
      />
    </form>
  );
}
