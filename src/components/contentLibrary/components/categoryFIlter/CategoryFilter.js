import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { selectedIsDrawerOpen } from 'redux/drawer/selectors';
import { DRAWER_WIDTH, BORDER_BOTTOM } from 'constants/index';
import { selectCompanyLogo } from 'redux/logo/selectors';

const useStyles = makeStyles({
  root: {
    width: (props) => DRAWER_WIDTH[+props.isDrawerOpen],
    height: '100%',
    background: 'black',
    transition: '0.3s',
    borderRight: (props) => (props.isDrawerOpen ? '1px solid white' : 'none'),
    overflowY: 'auto',
  },
  categoryItem: {
    borderBottom: `1px solid ${BORDER_BOTTOM}`,
    color: 'white',
    padding: '10px 0',
    cursor: 'pointer',
    transition: '0.1s',
    '&:hover': {
      background: BORDER_BOTTOM,
    },
  },
});

function CategoryFilter() {
  const { cats } = useSelector(selectCompanyLogo);
  const isDrawerOpen = useSelector(selectedIsDrawerOpen);

  const classes = useStyles({ isDrawerOpen });

  if (cats.length) {
    return (
      <div className={classes.root}>
        {[...[{ name: 'All', description: '' }], ...cats].map((category) => (
          <p className={classes.categoryItem}>{category.name}</p>
        ))}
      </div>
    );
  }
  return null;
}

export default CategoryFilter;
