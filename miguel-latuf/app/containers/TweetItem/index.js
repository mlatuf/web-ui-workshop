import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import TweetItem from './TweetItem';

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser()
  })
)(TweetItem);
