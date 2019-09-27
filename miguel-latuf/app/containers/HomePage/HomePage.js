/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Timeline from 'components/Timeline';

export default class HomePage extends React.PureComponent {

    componentDidMount() {
        const { getTweets } = this.props;
        getTweets();
    }

    onIncrementCount() {
        const { onChangeTweetsCount, tweetsCount} = this.props;
        onChangeTweetsCount(tweetsCount + 8);
    }

    render() {
        const { loading, error, tweets, tweetsCount } = this.props;
        const timelineProps = {
            loading,
            error,
            tweets,
            tweetsCount
        };

        return (
            <Fragment>
                {tweets && <Timeline {...timelineProps} onIncrementCount={this.onIncrementCount}/>}
            </Fragment>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    tweets: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onLoadMore: PropTypes.func
};
