import React, { Component } from 'react';
import Post from '../components/Post';
import ApiService from '../services/ApiService.js';

export default PostContainer extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        // TODO use real post_id, maybe from match.params (react router)
        ApiService.getPost(1)
        .then((json) => {
            this.setState({
                data: json
            });
        });
    }

    onNewCommentarySubmit(postId) {
        ApiService.createCommentary(postId);
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
            onNewCommentarySubmit: this.onNewCommentarySubmit
        };

        return (
            <Post
                {...data}
                {...this.props}
                {...handlers}
            />
        );
    }
}
