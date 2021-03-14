import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { HEADER_HEIGHT } from 'constants/index';
import { selectCompanyLogo } from 'redux/logo/selectors';

import CategoryFilter from './components/categoryFIlter/CategoryFilter';
import Content from './components/content/Content';

const useStyles = makeStyles({
  root: {
    height: `calc(100% - ${HEADER_HEIGHT}px)`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function ContentLibrary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CategoryFilter />
      <Content />
    </div>
  );
}

export default ContentLibrary;
