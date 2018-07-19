import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import CommentaryExpander from './CommentaryExpander.js';
import CommentaryNew from '../CommentaryNew';

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
    isExpanded: false,
    showReplyInput: false
  }

  shiftForNested = 40;

  handleExpanderClick = (isExpanded) => {
    this.setState({
      isExpanded: isExpanded
    });
  }

  handleCommentaryClick = () => {
      this.setState((prevState, props) => {
          return { showReplyInput: !prevState.showReplyInput };
      });
  }

  componentDidMount() {
    this.setState({
      needExpander: this.commentaryContent.offsetHeight > this.commentaryBody.offsetHeight
    });
  }

  render() {
    const { id, userName, createdAt, content, depth, ...restProps } = this.props;
    const isExpandedClassName = this.state.isExpanded ? 'commentary__body_expanded' : '';
    const commentaryMarginLeft = this.shiftForNested * depth + 'px';

    return (
      <div className="commentary" style={{marginLeft: commentaryMarginLeft}}>
        <div className="commentary__header">
          <span className="commentary__username">{userName}</span>
          <span className="commentary__createdAt">{new Date(createdAt).toDateString()}</span>
        </div>

        <div className={`commentary__body ${isExpandedClassName}`} ref={(commentaryBody) => {this.commentaryBody = commentaryBody}} onClick={this.handleCommentaryClick}>
          <span className="commentary__content" ref={(commentaryContent) => {this.commentaryContent = commentaryContent}}>{content}</span>
        </div>

        { this.state.needExpander && <CommentaryExpander onClick={this.handleExpanderClick} />}

        { this.state.showReplyInput && <CommentaryNew {...restProps} parentId={id} showButtons placeholder="Reply to a comment" cancelButtonText="Cancel" submitButtonText="Reply" />}

        <div className="commentary__actions">

        </div>
      </div>
    );
  }
}
