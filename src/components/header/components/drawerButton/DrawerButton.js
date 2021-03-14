import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_BUTTON_COLOR } from 'constants/index';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    minWidth: 40,
    height: '100%',
    color: DRAWER_BUTTON_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0 20px 10px 5px',
  },
});

function DrawerButton() {
  const classes = useStyles();

  return (
    <IconButton aria-label="menu" className={classes.root}>
      <MenuIcon />
    </IconButton>
  );
}

export default DrawerButton;
