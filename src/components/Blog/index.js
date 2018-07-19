import React from 'react';
import PostPreview from '../PostPreview';

export default function Blog({ posts = [], ...restProps }) {
    return (
        <div className="blog">
            { posts.map((post, index) => <PostPreview {...post} {...restProps} key={index} />) }
        </div>
    );
}
