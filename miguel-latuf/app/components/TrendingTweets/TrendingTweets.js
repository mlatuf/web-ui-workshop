import React from 'react';
import { Paper, InputBase, IconButton, Divider, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

const TrendingTweets = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase className={classes.input} inputProps={{ 'aria-label': 'Search'}}/>
      <Divider className={classes.divider} orientation="vertical"/>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Paper>
  )
};
export default TrendingTweets;