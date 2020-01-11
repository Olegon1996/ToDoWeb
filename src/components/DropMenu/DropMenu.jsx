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

const StyledMenu = withStyles({
  paper: {
    width: "200px",
    height: "165px",
    minHeight: '165px',
    left: "0px !IMPORTANT",
    top: "0px !IMPORTANT",
    borderRadius: 0,
    boxShadow: "none"
  }
})(props => (
  <Menu
    elevation={12}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "xcenter"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    width: "197px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
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
  width: 200,
  padding: "20px 20px",
  borderBottomRightRadius: 25,
  borderBottomLeftRadius: 25,
  position: "fixed",
  top: "165px",
  left: "0",
  zIndex: "2",
};

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
        style={{ width: 200,
            padding: "20px 20px",
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
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
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
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
}
