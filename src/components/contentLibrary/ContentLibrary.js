import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { HEADER_HEIGHT } from 'constants/index';
import { selectCompanyLogo } from 'redux/logo/selectors';
import contentActions from 'redux/content/actions';
import { selectContents } from 'redux/content/selectors';

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

  const dispatch = useDispatch();

  const { selectedCategory } = useSelector(selectCompanyLogo);
  const { contents } = useSelector(selectContents);

  const filteredContents = useMemo(() => {
    if (selectedCategory.toLowerCase().includes('all')) {
      return {
        catName: 'All',
        description: '',
        contentInf: contents.reduce((cur, content) => [...cur, ...content.contentInf], []),
      };
    }

    return contents.find((content) =>
      content.catName.trim().toLowerCase().includes(selectedCategory.trim().toLowerCase())
    );
  }, [selectedCategory, contents]);

  useEffect(() => {
    dispatch(contentActions.fetchContent());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CategoryFilter />
      <Content contents={filteredContents} />
    </div>
  );
}

export default ContentLibrary;
