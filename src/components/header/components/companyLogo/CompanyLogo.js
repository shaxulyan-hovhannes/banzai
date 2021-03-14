import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { selectCompanyLogo } from 'redux/logo/selectors';
import companyLogoActions from 'redux/logo/actions';

const useStyles = makeStyles({
  root: {
    width: 240,
    minWidth: 100,
    height: '100%',
    background: (props) => `url(${props.source}) white`,
    backgroundSize: '98% 92% !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundPosition: 'center center !important',
    boxSizing: 'border-box',
  },
});

function CompanyLogo() {
  const dispatch = useDispatch();

  const { source, loading, error } = useSelector(selectCompanyLogo);

  const classes = useStyles({ source });

  useEffect(() => dispatch(companyLogoActions.fetchCompanyLogo()), [dispatch]);

  if (error) {
    return null;
  }

  if (loading) {
    return <p style={{ color: 'white' }}>Loading...</p>;
  }

  return <div className={classes.root}></div>;
}

export default CompanyLogo;
