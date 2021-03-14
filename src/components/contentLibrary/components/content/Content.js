import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '80%',
    height: '100%',
    flex: 1,
    background: 'black',
    color: 'white',
    padding: '25px 8px',
  },
  description: {
    marginTop: 25,
  },
  contentItemContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    overflowY: 'auto',
    marginTop: 25,
  },
  contentItem: {
    width: '23%',
    marginTop: '2%',
    marginLeft: '2%',
    height: '23%',
    justifyContent: 'space-between',
  },
});

function Content({ contents }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>{contents?.catName.toUpperCase()}</h4>
      <p className={classes?.description}>{contents?.description}</p>
      <div className={classes?.contentItemContainer}>
        {contents?.contentInf?.map((content) => (
          <div
            style={{
              background: `url(${content.thumbnail})`,
              backgroundPosition: '100% 100%',
              backgroundSize: 'cover',
            }}
            className={classes.contentItem}
          ></div>
        ))}
      </div>
    </div>
  );
}

Content.propTypes = {
  contents: PropTypes.array,
};

export default Content;
