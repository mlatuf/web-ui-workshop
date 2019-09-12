import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import TweetItem from './TweetItem';

const mapDispatchToProps =(dispatch) => ({
    push:(url) => { 
        dispatch(push(url)); 
    }

});

export default connect(null, mapDispatchToProps)(TweetItem);
export { mapDispatchToProps };
