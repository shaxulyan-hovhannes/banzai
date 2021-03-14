import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flex: 1,
    color: 'white',
    padding: '0 20px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

function TitleBlock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Best Practices for Event Registration and Digital Collateral in Deloitte
    </div>
  );
}

export default TitleBlock;
