import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TweetItem from 'containers/TweetItem';
import UseInfiniteScroll from 'components/UseInfiniteScroll';

const useStyles = makeStyles(theme => ({
  progress: {
    flexGrow: 1
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
  text: {
    display: 'inline'
  },
  centeredText: {
    display: 'inline',
    textAlign: "center"
  },
  card: {
    boxShadow: 'none'
  },
  cardHeader: {
    padding: 0,
    paddingTop: '2%'
  },
  cardContent: {
    padding: '2%'
  },
  cardMedia: {
    padding: '0 4%'
  },
  cardActions: {
    display: 'inline-flex',
    justifyContent: 'space-between'
  }
}));

const Timeline = ({ loading, error, tweets, tweetsCount, onIncrementCount }) => {
  const classes = useStyles();
  const [listTweets, setListTweets] = useState(tweets.slice(0, tweetsCount));
  const [isFetching, setIsFetching] = UseInfiniteScroll(onLoadMore);

  function onLoadMore() {
    if (tweets.length <= tweetsCount) return;
    setTimeout(() => {
      setListTweets(prevState => ([...prevState, ...tweets.slice(tweetsCount, tweetsCount + 4)]));
      setIsFetching(false);
      onIncrementCount();
    }, 1500);
  }
  
  if (loading) {
    return <LinearProgress className={classes.progress} />;
  }
  
  if(error !== false) {
    const ErrorComponent = () => (
      <ListItem className={classes.root}>
        <ListItemText className={classes.centeredText}>Something went wrong, please try again!</ListItemText>
      </ListItem>
    );
    return <List className={classes.root}>{ErrorComponent}</List>
  } 

  if (tweets !== false) {
    let content = listTweets.map((item) => (
      <TweetItem classes={classes} item={item} key={item.id}/>
    ));
    return (
      <>
        <List className={classes.root}>
          {content}
          {isFetching  && (tweets.length > tweetsCount) && <ListItem className={classes.root}>
            <LinearProgress className={classes.progress} />
          </ListItem>}
          <Divider />
          {(tweets.length <= tweetsCount) && <ListItem className={classes.root}>
            <ListItemText className={classes.centeredText}>There's no more tweets!</ListItemText>
          </ListItem>}
        </List>
      </>
    );
  }
};

Timeline.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tweets: PropTypes.any,
  onIncrementCount: PropTypes.func
};

export default Timeline;
