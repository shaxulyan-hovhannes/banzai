import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HEADER_HEIGHT } from 'constants/index';

import CategoryFilter from './components/categoryFIlter/CategoryFilter';

const useStyles = makeStyles({
  root: {
    height: `calc(100% - ${HEADER_HEIGHT}px)`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    width: '80%',
    flex: 1,
    height: '100%',
    background: 'blue',
  },
});

function ContentLibrary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CategoryFilter />
      <div className={classes.contentContainer}>dddd</div>
    </div>
  );
}

export default ContentLibrary;
