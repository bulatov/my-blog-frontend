import React, { Component } from 'react';

import ApiService from '../services/ApiService.js';
import withAjax from '../hocs/withAjax.js';
import Post from '../components/Post';
import getNewState from '../helpers/getNewState.js';
import Menu from '../components/Menu';

export default class PostPage extends Component {
    commentaryHandlers = {
        onNewCommentarySubmit(postId, content) {
            ApiService.commentary.create(postId, content, '')
            .then(commentary => {
                this.setState(getNewState.commentary.create(this.state, commentary));
            });
        },

        onReplyCommentarySubmit(postId, content, parentId) {
            ApiService.commentary.create(postId, content, parentId)
            .then(commentary => {
                this.setState(getNewState.commentary.create(this.state, commentary));
            });
        },

        onCommentaryEdit(commentaryId, content) {
            ApiService.commentary.edit(commentaryId, content);
        },

        onCommentaryDelete(commentaryId) {
            ApiService.commentary.delete(commentaryId);
        }
    };

    render() {
        const postId = this.props.match.params.id;
        const PostContainer = withAjax(Post, () => ApiService.post.get(postId), this.commentaryHandlers);

        return (
            <div className="page post-page">
                <Menu />
                <PostContainer {...this.props} />
            </div>
        );
    }
}
