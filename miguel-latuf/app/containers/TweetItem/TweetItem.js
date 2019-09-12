/**
 * TweetItem
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, ListItem, Divider, IconButton, Card, CardHeader, CardContent, CardActions, CardMedia } from '@material-ui/core';
import { FavoriteBorder, Cached, ChatBubbleOutline } from '@material-ui/icons';
import _ from 'lodash';
export default class TweetItem extends React.PureComponent {
    render() {
        const { item, classes, key } = this.props;
        const twitterScreenTitle = (screen_name) => { return '@' + screen_name; };
    
        return (
            <Fragment>
                <ListItem alignItems="flex-start" key={key}>
                    <Card className={classes.card} onClick={() => this.props.push('/details/' + item.id_str)}>
                        <CardHeader
                            className={classes.cardHeader} 
                            title={item.user.name} 
                            subheader={twitterScreenTitle(item.user.screen_name)}
                            avatar={
                                <Avatar alt={twitterScreenTitle(item.user.screen_name)} src={_.get(item, ['user', 'profile_image_url'], 'Image not found')} />
                            }/>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="body2" component="p">
                                {item.text}
                            </Typography>
                        </CardContent>
                        {(item.extended_entities) && (item.extended_entities.media) &&
              <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  src={_.get(item, ['extended_entities', 'media', '0', 'media_url'], 'Image not found')}
              />
                        }
                        <CardActions className={classes.cardActions}>
                            <IconButton>
                                <FavoriteBorder/>
                                <Typography component="span" variant="body2" className={classes.text} color="textPrimary">
                                    {item.favorite_count}
                                </Typography>
                            </IconButton>
                            <IconButton>
                                <Cached/>
                                <Typography component="span" variant="body2" className={classes.text} color="textPrimary">
                                    {item.retweet_count}
                                </Typography>
                            </IconButton>
                            <IconButton>
                                <ChatBubbleOutline/>
                            </IconButton>
                        </CardActions>
                    </Card>
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
