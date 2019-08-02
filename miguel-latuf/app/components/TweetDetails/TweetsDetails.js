import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, FavoriteBorder, Cached, ChatBubbleOutline }  from '@material-ui/icons';
import { Typography, Card, CardHeader, Avatar, CardContent, CardMedia, CardActions, LinearProgress, AppBar, Toolbar, Fab, Divider } from '@material-ui/core';
import { green, pink, lightBlue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  progress: {
    flexGrow: 1
  },
  toolbar: {
    borderBottom: "2px solid #e8e8e8",
    boxShadow: 'none',
    backgroundColor: '#FFF'
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
    justifyContent: 'space-between',

  },
  like: {
    margin: theme.spacing(2,6),
    backgroundColor: pink[400],
    color: grey[50],
    '&:hover': {
      backgroundColor: pink[800]
    }
  },
  retweet: {
    margin: theme.spacing(2,6),
    backgroundColor: green[400],
    color: grey[50],
    '&:hover': {
      backgroundColor: green[800]
    }
  },
  comment: {
    margin: theme.spacing(2,6),
    backgroundColor: lightBlue[400],
    color: grey[50],
    '&:hover': {
      backgroundColor: lightBlue[800]
    }
  }
}));


const TweetDetails = ({ loading, error, getTweetDetails, tweetData, goBack }) => {
  const classes = useStyles();
  const [tweet, setTweet] = useState(tweetData);

  const twitterScreenTitle = (screen_name) => { return "@" + screen_name; }

  const twitterCreationDate = (created_at) => { 
    const d = new Date(created_at);
    return d.toDateString();
  } 
  // useEffect(() => {
  //   const ac = new AbortController();
  //   const fetchData = async () => {
  //     getTweetDetails(); 
  //     setTweet(tweetData);
  //     ac.abort();
  //   };
  //   fetchData();
  // }, []);
  
  const DetailsHeader = () => (
    <AppBar position="static" color="default" className={classes.toolbar}>
      <Toolbar>
        <ArrowBack onClick={goBack}/>
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
              <Avatar alt="Remy Sharp" src={tweet.user.profile_image_url} />
            } />
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" component="p">
              {tweet.text}
            </Typography>
          </CardContent>
          {(tweet.extended_entities) && (tweet.extended_entities.media) &&
            <CardMedia
              className={classes.cardMedia}
              component="img"
              src={tweet.extended_entities.media[0].media_url}
            />
          }
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" component="span">
              {twitterCreationDate(tweet.created_at)}
            </Typography>
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