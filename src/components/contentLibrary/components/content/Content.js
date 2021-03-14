import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '80%',
    height: '100%',
    flex: 1,
    background: 'black',
  },
});

function Content() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}

export default Content;
