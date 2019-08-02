import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { changeTweetId } from 'containers/TweetDetailsPage/actions';
import TweetItem from './TweetItem';

const mapDispatchToProps =(dispatch) => ({
  onChangeTweetId: (value) => {
    dispatch(changeTweetId(value));
  },
  push:(url) => { 
    dispatch(push(url)); 
  }

});

export default connect(null, mapDispatchToProps)(TweetItem);
export { mapDispatchToProps };
