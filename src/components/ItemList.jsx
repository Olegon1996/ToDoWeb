import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

import { connect } from "react-redux";
import { changeStatus, deleteTodoItem } from "../redux/actions/actions";

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    // minWidth: 300,
    // maxWidth: 600,
    maxHeight: 570,
    overflow: "hidden",
    backgroundColor: "rgba(161, 40, 77, 0.49)",
    borderRadius: "8px"
  },
  oneItem: {
    color: "white",
    overflow: 'hidden',
    marginRight: '10px',
  }
}));

function ToDoList({ changeToDoItem, deleteTodoItem, currentTodosList }) {
  const classes = useStyles();
  const handleToggle = value => () => changeToDoItem(value);
  const deleteItem = value => () => deleteTodoItem(value);

  return (
    <List className={classes.root}>
      {currentTodosList.map(value => {
        return (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.status === false}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": value.id }}
                color="secondary"
              />
            </ListItemIcon>
            <ListItemText
              className={classes.oneItem}
              value={value.id}
              id={value.id}
              primary={value.title}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={deleteItem(value.id)}
                color={"secondary"}
              >
                <HighlightOffRoundedIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    changeToDoItem: obj => {
      dispatch(changeStatus(obj));
    },
    deleteTodoItem: id => {
      dispatch(deleteTodoItem(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ToDoList);
