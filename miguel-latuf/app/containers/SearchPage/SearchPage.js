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
import { Divider } from '@material-ui/core';

export default class SearchPage extends React.PureComponent {

  componentDidMount() {
    const { getTrends } = this.props;
    getTrends();
  }

  onIncrementCount = () => {
    const { onChangeTweetsCount } = this.props;
    onChangeTweetsCount(searchResultsCount + 8);
  }
  
  render() {
    const { loading, error, trends, isSearching } = this.props;
    const trendListProps = {
      loading,
      error,
      trends
    };
    const timelineProps = {
      loading,
      error,
      searchResults,
      searchResultsCount
    };
  
    return (
      <Fragment>
        <SearchTweets />
        <Divider />
        {!isSearching && trends && <TrendingTweets {...trendListProps} />}
        {isSearching && searchResults && <Timeline {...timelineProps} onIncrementCount={this.onIncrementCount}/>}
      </Fragment>
    );
  }
}

SearchPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  trends: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
}
