import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentaryExpander extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  state = {
    isExpanded: false
  };

  handleExpanderClick = () => {
    this.setState((prevState) => {
      return {
        isExpanded: !prevState.isExpanded
      };
    }, () => {
      this.props.onClick(this.state.isExpanded);
    });
  }

  render() {
    return (
      <div className="commentary__expander" onClick={this.handleExpanderClick}>
        {this.state.isExpanded ? 'Read less' : 'Read more'}
      </div>
    );
  }
}
