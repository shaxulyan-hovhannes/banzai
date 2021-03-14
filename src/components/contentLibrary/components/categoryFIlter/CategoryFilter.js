import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectedIsDrawerOpen } from 'redux/drawer/selectors';
import { DRAWER_WIDTH, BORDER_BOTTOM } from 'constants/index';
import { selectCompanyLogo } from 'redux/logo/selectors';
import companyLogoActions from 'redux/logo/actions';

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
  const dispatch = useDispatch();

  const { cats } = useSelector(selectCompanyLogo);
  const isDrawerOpen = useSelector(selectedIsDrawerOpen);

  const classes = useStyles({ isDrawerOpen });

  const onHandleClickCategory = useCallback(
    (category) => () => dispatch(companyLogoActions.selectCategory(category)),
    [dispatch]
  );

  if (cats.length) {
    return (
      <div className={classes.root}>
        {[...[{ name: 'All', description: '' }], ...cats].map((category, index) => (
          <p
            key={index}
            className={classes.categoryItem}
            onClick={onHandleClickCategory(category.name)}
          >
            {category.name}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default CategoryFilter;
