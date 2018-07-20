import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
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
            <div className="post">

                <div className="post__header">
                    <div className="post__title">{title}</div>
                    <div className="post__meta">
                        <span className="post__username">Created by {userName} </span>
                        <span className="post__createdAt">at {(new Date(createdAt)).toDateString()}</span>
                    </div>
                </div>

                <div className="post__body">
                    <div className="post__content">{content}</div>
                </div>

                <div className="post__commentaryNew">
                    <CommentaryNew {...restProps} placeholder="Add a public comment" cancelButtonText="Cancel" submitButtonText="Comment" />
                </div>

                <div className="post__commentaries">
                    <CommentaryTree {...restProps} comments={commentaries} />
                </div>
            </div>
        );
    }
}
