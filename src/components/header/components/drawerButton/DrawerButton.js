import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { DRAWER_BUTTON_COLOR } from 'constants/index';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import toggleDrawer from 'redux/drawer/actions';

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

  const dispatch = useDispatch();

  const onHandleDrawerClick = useCallback(() => dispatch(toggleDrawer()), [dispatch]);

  return (
    <IconButton aria-label="menu" className={classes.root} onClick={onHandleDrawerClick}>
      <MenuIcon />
    </IconButton>
  );
}

export default DrawerButton;
