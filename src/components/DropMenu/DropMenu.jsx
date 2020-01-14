import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

export default function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
        style={{ width: 100,
            padding: "15px",
            borderTopRightRadius: '0',
            borderTopLeftRadius: '0',
            borderBottomRightRadius: '50px',
            borderBottomLeftRadius: '50px',
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "2"}}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          {/* <ListItemIcon> */}
            {/* <SendIcon fontSize="small" /> */}
          {/* </ListItemIcon> */}
          <ListItemText primary="All" />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon> */}
            {/* <DraftsIcon fontSize="small" /> */}
          {/* </ListItemIcon> */}
          <ListItemText primary="Done" />
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon> */}
            {/* <InboxIcon fontSize="small" /> */}
          {/* </ListItemIcon> */}
          <ListItemText primary="Not Done" />
        </StyledMenuItem>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          onClick={handleClose}
          style={styleBtn}
        >
          Menu
        </Button>
      </StyledMenu>
    </div>
  );
};


const StyledMenu = withStyles({
  paper: {
    width: "100px",
    height: 269,
    left: "0px !IMPORTANT",
    top: "0px !IMPORTANT",
    borderRadius: 0,
    boxShadow: "none",
    minHeight: 269,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  }
})(props => (
  <Menu
    elevation={40}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
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
  padding: "15px",
  borderTopRightRadius: '0',
  borderTopLeftRadius: '0',
  borderBottomRightRadius: '50px',
  borderBottomLeftRadius: '50px',
  position: "fixed",
  top: "215px",
  left: "0",
  zIndex: "2",
};

