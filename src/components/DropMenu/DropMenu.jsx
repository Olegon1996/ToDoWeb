import React, {useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function DropMenu({ logOutFunc }) {
  const [value, setValue] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toHome, setToHome] = React.useState(false);
  const [toCompleted, setToCompleted] = React.useState(false);
  const [toInCompleted, setToInCompleted] = React.useState(false);

  const history = useHistory();
  const Token = JSON.parse(sessionStorage.getItem('token'));

  const RedirectToHome = toHome ? <Redirect to="/app" /> : null;
  const RedirectToCompleted = toCompleted ? (
    <Redirect to="/app/completed" />
  ) : null;
  const RedirectToIncompleted = toInCompleted ? (
    <Redirect to="/app/incompleted" />
  ) : null;

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    if (!Token) {
      history.push("/");
    }
  }, [history, Token]);

  return (
    <div>
      {RedirectToHome}
      {RedirectToCompleted}
      {RedirectToIncompleted}
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
        style={{
          width: 100,
          padding: "3px 5px 15px 5px",
          borderTopRightRadius: "0",
          borderTopLeftRadius: "0",
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          position: "fixed",
          top: "0",
          left: "0",
          textTransform: 'none'
        }}
      >
        {!value ? 'Menu' : value}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
        selected={toHome}
          onClick={() => {
            setToHome(true);
            setToCompleted(false);
            setToInCompleted(false);
            handleClose()
            setValue('All')
          }}
        >
          <ListItemText primary="All" />
        </StyledMenuItem>
        <StyledMenuItem
        selected={toCompleted}
          onClick={() => {
            setToCompleted(true);
            setToHome(false);
            setToInCompleted(false);
            handleClose()
            setValue('Done')
          }}
        >
          <ListItemText primary="Done" />
        </StyledMenuItem>
        <StyledMenuItem
        selected={toInCompleted}
          onClick={() => {
            setToInCompleted(true);
            setToHome(false);
            setToCompleted(false);
            handleClose()
            setValue('Not done')
          }}
        >
          <ListItemText primary="Not done" />
        </StyledMenuItem>
        <Button
          onClick={() => {
            handleClose()
            logOutFunc()
          }}
          size="small"
          color="secondary"
          style={{ position: "absolute", top: "208px", left: "7px" }}
        >
          log out
        </Button>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          onClick={handleClose}
          style={styleBtn}
        >
          {!value ? 'Menu' : value}
        </Button>
      </StyledMenu>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logOutFunc: () => {
      dispatch({ type: "LOGOUT_REQUEST" });
    }
  };
};

export default connect(null, mapDispatchToProps)(DropMenu);

const StyledMenu = withStyles({
  paper: {
    width: "100px",
    height: 295,
    left: "0px !IMPORTANT",
    top: "0px !IMPORTANT",
    borderRadius: 0,
    boxShadow: "none",
    minHeight: 295,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  }
})(props => (
  <Menu
    elevation={6}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    width: "97px",
    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
    marginBottom: "5px",
    "&:nth-of-type(2)": {
      marginBottom: 5,
      marginTop: 5
    },
    "& > *": {
      "& > *": {
        fontSize: 16
      }
    },
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const styleBtn = {
  width: 100,
  padding: "3px 5px 15px 5px",
  borderTopRightRadius: "0",
  borderTopLeftRadius: "0",
  borderBottomRightRadius: "50px",
  borderBottomLeftRadius: "50px",
  position: "fixed",
  top: "247px",
  left: "0",
  zIndex: "2",
  textTransform: 'none',
};
