import { connect } from 'react-redux';
import { compose } from 'redux';
import { goBack } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectTweetId, makeSelectTweetDetails } from './selectors';
import { loadTweetDetails, changeTweetId } from './actions';
import reducer from './reducer';
import saga from './saga';
import TweetDetailsPage from './TweetDetailsPage';

const mapDispatchToProps =(dispatch) => ({
    onChangeTweetId: (value) => {
        dispatch(changeTweetId(value));
    },
    getTweetDetails: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loadTweetDetails());
    },
    goBack:() => { dispatch(goBack());}
  
});

const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
    tweetData: makeSelectTweetDetails(),
    tweetId: makeSelectTweetId()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tweetdetails', reducer });
const withSaga = injectSaga({ key: 'tweetdetails', saga });

export default compose(withReducer, withSaga, withConnect)(TweetDetailsPage);
export { mapDispatchToProps };
