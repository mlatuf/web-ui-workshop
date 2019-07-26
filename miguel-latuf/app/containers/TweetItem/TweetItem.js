/**
 * TweetItem
 *
 * Lists the name and the issue count of a repository
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar, Avatar, Typography, ListItemText, ListItem, Divider, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { FavoriteBorder, Cached, ChatBubbleOutline} from '@material-ui/icons';
export default class TweetItem extends React.PureComponent {
  render() {
    const { item, classes, key } = this.props;

    return (
      <Fragment>
        <ListItem alignItems="flex-start" key={key}>
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
                  component="span"
                  variant="body2"
                  className={classes.text}
                  color="textPrimary"
                >
                  {item.text}
                </Typography>
              </Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.iconContainer}>
            <IconButton>
              <FavoriteBorder />
              <Typography component="span" variant="body2" className={classes.text} color="textPrimary">
                {item.favorite_count}
              </Typography>
            </IconButton>
            <IconButton>
              <Cached />
              <Typography component="span" variant="body2" className={classes.text} color="textPrimary">
                {item.retweet_count}
              </Typography>
            </IconButton>
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </Fragment>
    );
  }
}

TweetItem.propTypes = {
  item: PropTypes.object,
  className: PropTypes.object,
  key: PropTypes.number
};
