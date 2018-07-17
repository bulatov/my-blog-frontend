import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentaryNew from '../CommentaryNew';
import Commentary from '../Commentary';

// TODO implement Post
// Dont forget to pass props below as {...this.props} in all inner components
// CommentaryNew and others need handlers like onNewCommentarySubmit

export default class Post extends Component {
    static propTypes = {
        id: PropTypes.number,
        userName: PropTypes.string,
        createdAt: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        comments: PropTypes.array
    };

    static defaultProps = {
        comments: []
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
                {
                    comments.map((comment, index) => <Commentary {...restProps} {...comment} key={index} />)
                }
            </div>
        );
    }
}
