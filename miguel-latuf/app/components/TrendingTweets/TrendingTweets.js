import React from "react";
import { useStyles } from "./styles";
import { LinearProgress, List, ListItem, ListItemText, Divider } from "@material-ui/core";

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
    let content = trends.map((item) => (
      <ListItem className={classes.root} key={item.name}>
        <ListItemText className={classes.centeredText}>{item.name}</ListItemText>
      </ListItem>
    ));
    return (
      <List className={classes.root}>
        {content}
        <Divider />
      </List>
    );
  }
};
export default TrendingTweets;