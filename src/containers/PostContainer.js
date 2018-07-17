import React, { Component } from 'react';
import Post from '../components/Post';
import ApiService from '../services/ApiService.js';

export default class PostContainer extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        // TODO use real post_id, maybe from match.params (react router)
        ApiService.post.get(1)
        .then((json) => {
            this.setState({
                data: json
            });
        });
    }

    onNewCommentarySubmit(postId, content) {
        ApiService.commentary.create(postId, content, '');
    }

    onReplyCommentarySubmit(postId, content, parentId) {
        ApiService.commentary.create(postId, content, parentId)
    }

    onCommentaryEdit(commentaryId, content) {
        ApiService.commentary.edit(commentaryId, content);
    }

    onCommentaryDelete(commentaryId) {
        ApiService.commentary.delete(commentaryId);
    }

    onPostEdit(postId, title, content) {
        ApiService.post.edit(postId, title, content);
    }

    onPostDelete(postId) {
        ApiService.post.delete(postId);
    }

    /*
    * TODO
    * NewCommentary - means Root commentary
    * ReplyCommentary - means Not Root commentary
    * onReplyCommentarySubmit, onReplyCommentaryEdit, ...
    * onNewCommentaryEdit, onNewCommentaryDelete, ...
    */

    render() {
        const handlers = {
            onNewCommentarySubmit: this.onNewCommentarySubmit,
            onReplyCommentarySubmit: this.onReplyCommentarySubmit,
            onCommentaryEdit: this.onCommentaryEdit,
            onCommentaryDelete: this.onCommentaryDelete,
            onPostEdit: this.onPostEdit,
            onPostDelete: this.onPostDelete
        };

        return (
            <Post
                {...this.state.data}
                {...this.props}
                {...handlers}
            />
        );
    }
}
