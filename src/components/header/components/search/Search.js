import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { SEARCH_INPUT_COLOR } from 'constants/index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    color: 'white',
  },
  searchInput: {
    width: '100%',
    color: SEARCH_INPUT_COLOR,
  },
  searchIcon: {
    color: SEARCH_INPUT_COLOR,
  },
});

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.searchInput}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.searchIcon} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default Search;
