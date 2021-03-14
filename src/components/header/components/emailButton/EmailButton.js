import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px 10px',
  },
  button: {
    margin: theme.spacing(1),
    background: '#8ec938',
    boxSizing: 'border-box',
    color: 'white',
    '&:hover': {
      background: '#638b27',
    },
  },
}));

function EmailButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="text" className={classes.button} startIcon={<EmailOutlinedIcon />}>
        Save
      </Button>
    </div>
  );
}

export default EmailButton;
