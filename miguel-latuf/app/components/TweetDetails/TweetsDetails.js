import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ArrowBack, FavoriteBorder, Cached, ChatBubbleOutline }  from '@material-ui/icons';
import { Typography, Card, CardHeader, Avatar, CardContent, CardMedia, CardActions, LinearProgress, AppBar, Toolbar, Fab, Divider } from '@material-ui/core';
import { useStyles } from './styles';
import { get } from 'lodash';

const TweetDetails = ({ loading, error, tweetData, goBack }) => {
  const classes = useStyles();
  const [tweet, setTweet] = useState(tweetData);

  //TODO  create utils and send this functions there
  const twitterScreenTitle = (screen_name) => { return "@" + screen_name; }
  const twitterCreationDate = (created_at) => { 
    return new Date(created_at).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short', hour12: true });
  } 
  
  const DetailsHeader = () => (
    <AppBar position="static" color="default" className={classes.toolbarContainer}>
      <Toolbar className={classes.toolbar}>
        <ArrowBack onClick={goBack} className={classes.back}/>
        <Typography variant="h5" component="h3" color="initial">Tweet</Typography>
      </Toolbar>
    </AppBar>
  );

  if (loading) {
    return (
      <Fragment>
        <DetailsHeader />
        <LinearProgress className={classes.progress} />
      </Fragment>
    );
  }
  
  if (error !== false) {
    const ErrorComponent = () => (
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" component="p">
          Something went wrong, please try again!
        </Typography>
      </CardContent>
    );
    return (
      <Fragment>
        <DetailsHeader />
        <Card className={classes.card}>{ErrorComponent}</Card>
      </Fragment>
    );
  }

  if (tweet !== false) {
    return (
      <Fragment>
        <DetailsHeader />
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={tweet.user.name}
            subheader={twitterScreenTitle(tweet.user.screen_name)}
            avatar={
              <Avatar alt={twitterScreenTitle(tweet.user.screen_name)} src={_.get(tweet, ['user', 'profile_image_url'], 'Image not found')} className={classes.cardAvatar}/>
            } />
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" component="p">
              {tweet.text}
            </Typography>
          </CardContent>
          {(tweet.extended_entities) && (tweet.extended_entities.media) &&
            <CardMedia
              className={classes.cardMedia}
              component="img"
              src={_.get(tweet, ['extended_entities', 'media', '0', 'media_url'], 'Image not found')}
            />
          }
          <CardContent className={classes.cardContent}>
            <div className={classes.info}>
              <Typography variant="body2" component="span">
                {twitterCreationDate(tweet.created_at)}
              </Typography>
            </div>
            <Divider className={classes.divider}/>
            <div className={classes.info}>
              <Typography variant="body2" component="span">
                {tweet.retweet_count} Retweets  
              </Typography>
            </div>
            <div className={classes.info}>
              <Typography variant="body2" component="span">
                {tweet.favorite_count} Likes  
              </Typography>
            </div>
            <Divider />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Fab arial-label="Like" className={classes.like}>
              <FavoriteBorder />
            </Fab>
            <Fab arial-label="Retweet" className={classes.retweet}>
              <Cached />
            </Fab>
            <Fab arial-label="Comment" className={classes.comment}>
              <ChatBubbleOutline />
            </Fab>
          </CardActions>
        </Card>
      </Fragment>
    );
  };
}

TweetDetails.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tweetData: PropTypes.any,
  getTweetDetails: PropTypes.func,
  goBack: PropTypes.func
};

export default TweetDetails;