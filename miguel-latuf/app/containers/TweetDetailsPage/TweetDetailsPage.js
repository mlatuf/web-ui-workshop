import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TweetDetails from 'components/TweetDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

export default class TweetDetailsPage extends React.PureComponent {

  componentDidMount() {
    const { getTweetDetails } = this.props;
    getTweetDetails();
  }

  render() {
    const { loading, error, tweetData, goBack } = this.props;
    const tweetDetailsProps = {
      loading,
      error,
      tweetData,
      goBack
    };
    return (
      <Fragment>
        {tweetData && <TweetDetails {...tweetDetailsProps}/>}
      </Fragment>
    );
  }
}
TweetDetailsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tweetData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  getTweetDetails: PropTypes.func,
  goBack: PropTypes.func
};