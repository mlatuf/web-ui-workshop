import React, { Fragment } from "react";
import { useStyles } from "./styles";
import { LinearProgress, List, ListItem, ListItemText, Divider, Typography, ListItemIcon } from "@material-ui/core";

const TrendingTweets = ({ loading, error, trends }) => {
  const classes = useStyles();

  if (loading) {
    return <LinearProgress className={classes.progress} />
  };

  if(error !== false) {
    const ErrorComponent = () => (
      <ListItem className={classes.root}>
        <ListItemText className={classes.centeredText}>Something went wrong, please try again!</ListItemText>
      </ListItem>
    );
    return <List className={classes.root}>{ErrorComponent}</List>
  } 
  
  if (trends !== false) {
    let content = trends.map((item, index) => (
      <Fragment>
        <ListItem className={classes.root} key={index} alignItems="flex-start">
          <ListItemIcon>
            <Typography
              component="span"
              variant="body2"
              className={classes.centeredText}
              color="textPrimary">
              {index + 1}
            </Typography>
          </ListItemIcon>
          <ListItemText 
            primary={
              <Fragment>
                <Typography
                  component="p"
                  variant="body2"
                  className={classes.text}
                  color="textPrimary">
                  {item.name}
                </Typography>
              </Fragment>
            } 
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.textSecondary}
                  color="textSecondary">
                  {item.tweet_volume || 0} Tweets
                </Typography>
              </Fragment>
            }/>
        </ListItem>
        <Divider />
      </Fragment>
    ));
    return (
      <List className={classes.root}>
        {content}
      </List>
    );
  }
};
export default TrendingTweets;