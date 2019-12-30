import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import SubjectTwoToneIcon from "@material-ui/icons/SubjectTwoTone";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
    '& > *': {
      padding: 0,
      '& .MuiBottomNavigationAction-label.Mui-selected': {
        fontSize: '17px'
      }
    }
  },
  actionItemStyles: {
    "&$selected": {
      color: "red",
    }
  },
  // This is required for the '&$selected' selector to work
  selected: {}
})

export default function SimpleBottomNavigation({
  first,
  second,
  third,
  size,
  style
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [toHome, setToHome] = React.useState(false);
  const [toCompleted, setToCompleted] = React.useState(false);
  const [toInCompleted, setToInCompleted] = React.useState(false);

  const RedirectToHome = toHome ? <Redirect to="/" /> : null;
  const RedirectToCompleted = toCompleted ? <Redirect to="/completed" /> : null;
  const RedirectToIncompleted = toInCompleted ? (
    <Redirect to="/incompleted" />
  ) : null;
  return (
    <React.Fragment>
      {RedirectToHome}
      {RedirectToCompleted}
      {RedirectToIncompleted}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        style={style}
      >
        <BottomNavigationAction
          onClick={() => {
            setToHome(true);
            setToCompleted(false);
            setToInCompleted(false);
          }}
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected
          }}
          label={first}
          icon={<PlaylistAddIcon fontSize={size} />}
        />
        <BottomNavigationAction
          onClick={() => {
            setToCompleted(true);
            setToHome(false);
            setToInCompleted(false);
          }}
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected
          }}
          label={second}
          icon={<PlaylistAddCheckTwoToneIcon fontSize={size} />}
        />
        <BottomNavigationAction
          onClick={() => {
            setToInCompleted(true);
            setToHome(false);
            setToCompleted(false);
          }}
          classes={{
            root: classes.actionItemStyles,
            selected: classes.selected
          }}
          label={third}
          icon={<SubjectTwoToneIcon fontSize={size} />}
        />
      </BottomNavigation>
    </React.Fragment>
  );
}
