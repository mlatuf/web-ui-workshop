/**
 * TweetItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class TweetItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    // Put together the content of the repository
    const content = (
      <div className="repo-list-item">
        {/* <a className="repo-list-item__repo-link" href={item.html_url} target="_blank" rel="noopener noreferrer">
          {nameprefix + item.name}
        </a>
        <a className="repo-list-item__issue-link" href={`${item.html_url}/issues`} target="_blank" rel="noopener noreferrer">
          <IssueIcon className="repo-list-item__issue-icon" />
          {item.open_issues_count}
        </a> */}
        <p>{item.text}</p>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.id}`} item={content} />
    );
  }
}

TweetItem.propTypes = {
  item: PropTypes.object
};
