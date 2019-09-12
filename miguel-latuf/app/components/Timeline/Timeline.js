import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, LinearProgress } from '@material-ui/core';
import { useStyles } from './styles';
import TweetItem from 'containers/TweetItem';
import UseInfiniteScroll from 'components/UseInfiniteScroll';

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
        return (
            <List className={classes.root}>
                <ListItem className={classes.root}>
                    <ListItemText className={classes.centeredText}>Something went wrong, please try again!</ListItemText>
                </ListItem>
            </List>);
    } 

    if (tweets && tweets !== false) {
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
