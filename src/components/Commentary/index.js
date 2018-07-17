import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import CommentaryExpander from './CommentaryExpander.js';

export default class Commentary extends Component {

  static propTypes = {
    userName: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  };

  state = {
    needExpander: false,
    isExpanded: false
  }

  handleExpanderClick = (isExpanded) => {
    this.setState({
      isExpanded: isExpanded
    });
  }

  componentDidMount() {
    this.setState({
      needExpander: this.commentaryContent.offsetHeight > this.commentaryBody.offsetHeight
    });
  }

  render() {
    const { userName, createdAt, content } = this.props;
    const isExpandedClassName = this.state.isExpanded ? 'commentary__body_expanded' : '';

    return (
      <div className="commentary">
        <div className="commentary__header">
          <span className="commentary__username">{userName}</span>
          <span className="commentary__createdAt">{new Date(createdAt).toDateString()}</span>
        </div>

        <div className={`commentary__body ${isExpandedClassName}`} ref={(commentaryBody) => {this.commentaryBody = commentaryBody}}>
          <span className="commentary__content" ref={(commentaryContent) => {this.commentaryContent = commentaryContent}}>{content}</span>
        </div>

        { this.state.needExpander && <CommentaryExpander onClick={this.handleExpanderClick} />}

        <div className="commentary__actions">

        </div>
      </div>
    );
  }
}
