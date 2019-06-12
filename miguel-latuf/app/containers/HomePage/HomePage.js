/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Timeline from 'components/Timeline';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm, getTweets } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
    getTweets();
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm, count, tweets
    } = this.props;

    const timelineProps = {
      loading,
      error,
      tweets
    };

    return (
      <Fragment>
        <Typography component="div" style={{ height: '100vh' }}>
          {tweets && <Timeline {...timelineProps} />}
        </Typography>
        {/* <div className="home-page">
          <section> */}
            {/* <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={username}
                  onChange={onChangeUsername}
                />
              </label>
            </form> */}
            {/* {tweets && <Timeline {...timelineProps} />}
          </section>
        </div> */}
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tweets: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
