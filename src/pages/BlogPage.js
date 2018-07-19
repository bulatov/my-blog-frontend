import React, { Component } from 'react';

import ApiService from '../services/ApiService.js';
import withAjax from '../hocs/withAjax.js';
import Blog from '../components/Blog';

export default class BlogPage extends Component {
    postHandlers = {
        onPostCreate: () => {
            return ApiService.post.create();
        },

        onPostEdit(id, title, content) {
            return ApiService.post.edit(id, title, content);
        },

        onPostDelete(id) {
            return ApiService.post.delete(id);
        }
    };

    render() {
        const BlogContainer = withAjax(Blog, () => ApiService.blog.get(), this.postHandlers);
        return (
            <BlogContainer />
        );
    }
}
