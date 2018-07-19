import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentaryNew from '../CommentaryNew';
import CommentaryTree from '../CommentaryTree';

export default class Post extends Component {
    static propTypes = {
        id: PropTypes.number,
        userName: PropTypes.string,
        createdAt: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        commentaries: PropTypes.array
    };

    render() {
        const { id, userName, createdAt, title, content, commentaries, ...restProps } = this.props;

        return (
            <div>
                <span>id: {id}</span>
                <span>userName: {userName}</span>
                <span>createdAt: {createdAt}</span>
                <h1>{title}</h1>
                <div>{content}</div>
                <CommentaryNew {...restProps} placeholder="Add a public comment" cancelButtonText="Cancel" submitButtonText="Comment" />
                <CommentaryTree {...restProps} comments={commentaries} />
            </div>
        );
    }
}
