/**
 * TweetItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar, Avatar, Typography, ListItemText, ListItem } from '@material-ui/core';

export default class TweetItem extends React.PureComponent {
  render() {
    const { item, classes } = this.props;

    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.user.profile_image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Fragment>
              <Typography
                component="h6"
                className={classes.user}
                color="initial"
              >
              {item.user.screen_name}
              </Typography>
            </Fragment>
          }
          secondary={
            <Fragment>
              <Typography
                component="p"
                variant="body2"
                className={classes.text}
                color="textPrimary"
              >
              {item.text}
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
    );
  }
}

TweetItem.propTypes = {
  item: PropTypes.object
};
