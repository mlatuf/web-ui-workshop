/*
 * SearchPage
 *
 * Visualize the trending tweets
 * Perform the search and show results 
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchTweets from 'components/SearchTweets';
import TrendingTweets from 'components/TrendingTweets';

export default class SearchPage extends React.PureComponent {

  componentDidMount() {
    const { getTrends } = this.props;
    getTrends();
  }
  
  render() {
    const { loading, error, trends } = this.props;
    const trendListProps = {
      loading,
      error,
      trends
    };
  
    return (
      <Fragment>
        <SearchTweets />
        {trends && <TrendingTweets {...trendListProps} />}
      </Fragment>
    );
  }
}

SearchPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  trends: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
}
