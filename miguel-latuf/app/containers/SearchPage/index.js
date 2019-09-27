import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
    makeSelectLoading,
    makeSelectError
} from 'containers/App/selectors';
import { makeSelectTrends } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchPage from './SearchPage';
import { loadTrends } from './actions';

const mapDispatchToProps = (dispatch) => ({
    getTrends: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loadTrends());
    }
});

const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
    trends: makeSelectTrends()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(withReducer, withSaga, withConnect)(SearchPage);
export { mapDispatchToProps };