import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from "@material-ui/core/styles"

export default function PositionedSnackbar({isOpen, closeIsOpen}) {
    const classes = useStyles();
    const handleClose = (value) => {
        closeIsOpen(value);
    }
  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        key={`bottom, left`}
        open={isOpen}
        onClose={handleClose}
        message="Authorization failed"
        autoHideDuration={1000}
      />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
          background: 'rgb(245, 0, 87)'
      }
    }
  }));