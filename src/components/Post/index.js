import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentaryNew from '../CommentaryNew';
import CommentaryTree from '../CommentaryTree';

// TODO implement Post
// Dont forget to pass props below as {...this.props} in all inner components
// CommentaryNew and others need handlers like onNewCommentarySubmit

export default class Post extends Component {
    // TODO make props isRequired, but they come async
    static propTypes = {
        id: PropTypes.number,
        userName: PropTypes.string,
        createdAt: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        comments: PropTypes.array
    };

    render() {
        const { id, userName, createdAt, title, content, comments, ...restProps } = this.props;

        return (
            <div>
                <span>id: {id}</span>
                <span>userName: {userName}</span>
                <span>createdAt: {createdAt}</span>
                <h1>{title}</h1>
                <div>{content}</div>
                <CommentaryNew {...restProps} placeholder="Add a public comment" cancelButtonText="Cancel" submitButtonText="Reply" />
                <CommentaryTree {...restProps} comments={comments} />
            </div>
        );
    }
}
