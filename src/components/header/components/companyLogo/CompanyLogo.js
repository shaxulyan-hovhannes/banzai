import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { selectCompanyLogo } from 'redux/logo/selectors';

const useStyles = makeStyles({
  root: {
    width: 180,
    minWidth: 100,
    height: '100%',
    background: (props) => `url(${props.source})`,
    backgroundSize: '100% 75% !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundPosition: 'center center !important',
    boxSizing: 'border-box',
  },
});

function CompanyLogo() {
  const { source, loading, error } = useSelector(selectCompanyLogo);

  const classes = useStyles({ source });

  if (error) {
    return null;
  }

  if (loading) {
    return <p style={{ color: 'white' }}>Loading...</p>;
  }

  return <div className={classes.root}></div>;
}

export default CompanyLogo;
