/*
 * SearchPage
 *
 * Visualize and search the trending twets
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TrendingTweets from '../../components/TrendingTweets';

export default class SearchPage extends React.PureComponent {

  render() {

    return (
      <Fragment>
        <TrendingTweets />
      </Fragment>
    );
  }
}

// SearchPage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
// }
