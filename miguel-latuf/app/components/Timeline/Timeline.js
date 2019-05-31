import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TweetItem from 'containers/TweetItem';

const Timeline = ({ loading, error, tweets }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (tweets !== false) {
    return <List items={tweets} component={TweetItem} />;
  }

  return null;
};

Timeline.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tweets: PropTypes.any
};

export default Timeline;
