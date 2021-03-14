import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MAIN_BACKGROUND_COLOR } from 'constants/index';

import DrawerButton from './components/drawerButton/DrawerButton';
import CompanyLogo from './components/companyLogo/CompanyLogo';
import TitleBlock from './components/titleBlock/TitleBlock';
import Search from './components/search/Search';
import EmailButton from './components/emailButton/EmailButton';

const useStyles = makeStyles({
  root: {
    height: 45,
    background: MAIN_BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function Header() {
  const classes = useStyles();

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
