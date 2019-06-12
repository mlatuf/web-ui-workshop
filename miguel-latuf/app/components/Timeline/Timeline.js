import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, List, ListItem } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';
import TweetItem from 'containers/TweetItem';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  user: {
    fontWeight: "bold"
  },
  text: {
    display: 'inline',
  },
}));

const Timeline = ({ loading, error, tweets }) => {
  const classes = useStyles();

  if (loading) {
    return <CircularProgress className={classes.progress}/>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem alignItems="flex-start">
        <p>Something went wrong, please try again!</p>
      </ListItem>
    );
    return <List>{ErrorComponent}</List>
  }

  if (tweets !== false) {
    let content = tweets.map((item) => (
      <TweetItem classes={classes} item={item}/>      
    ));
    return <List>{content}</List>;
  }

  return null;
};

Timeline.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tweets: PropTypes.any
};

export default Timeline;
