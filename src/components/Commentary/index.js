import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import CommentaryExpander from './CommentaryExpander.js';

export default class Commentary extends Component {

  static propTypes = {
    userName: PropTypes.string,
    createdAt: PropTypes.number,
    content: PropTypes.string,
    depth: PropTypes.number
  };

  static defaultProps = {
      depth: 0
  };

  state = {
    needExpander: false,
    isExpanded: false
  }

  shiftForNested = 40;

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
    const { userName, createdAt, content, depth } = this.props;
    const isExpandedClassName = this.state.isExpanded ? 'commentary__body_expanded' : '';
    const commentaryMarginLeft = this.shiftForNested * depth + 'px';
    console.log(this.shiftForNested);

    return (
      <div className="commentary" style={{marginLeft: commentaryMarginLeft}}>
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
