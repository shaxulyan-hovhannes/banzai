import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { MAIN_BACKGROUND_COLOR, HEADER_HEIGHT, BORDER_BOTTOM } from 'constants/index';

import DrawerButton from './components/drawerButton/DrawerButton';
import CompanyLogo from './components/companyLogo/CompanyLogo';
import TitleBlock from './components/titleBlock/TitleBlock';
import Search from './components/search/Search';
import EmailButton from './components/emailButton/EmailButton';
import companyLogoActions from 'redux/logo/actions';

const useStyles = makeStyles({
  root: {
    height: HEADER_HEIGHT,
    background: MAIN_BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: `1px solid ${BORDER_BOTTOM}`,
  },
});

function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => dispatch(companyLogoActions.fetchCompanyLogo()), [dispatch]);

  return (
    <div className={classes.root}>
      <DrawerButton />
      <CompanyLogo />
      <TitleBlock />
      <Search />
      <EmailButton />
    </div>
  );
}

export default Header;
