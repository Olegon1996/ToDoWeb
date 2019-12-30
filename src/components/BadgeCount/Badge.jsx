import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function BadgeMax({max, badgeContent, color, style}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={badgeContent} max={max} color={color} style={style}>
        <MailIcon />
      </Badge>
    </div>
  );
}