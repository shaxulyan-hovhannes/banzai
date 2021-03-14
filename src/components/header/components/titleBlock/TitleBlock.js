import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { selectCompanyLogo } from 'redux/logo/selectors';

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
  const { title, error } = useSelector(selectCompanyLogo);

  if (error) {
    return null;
  }

  return <div className={classes.root}>{title}</div>;
}

export default TitleBlock;
