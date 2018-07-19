export default {
    blog: {
        get: (response) => {
            return {
                ...response,
                posts: response.posts.map(post => {
                    return {
                        ...post,
                        createdAt: post.created_at * 1000,
                        userName: post.user_name
                    };
                })
            };
        }
    },
    post: {
        get: (response) => {
            return {
                ...response,
                commentaries: response.commentaries.map(commentary => {
                    return {
                        ...commentary,
                        createdAt: commentary.created_at * 1000,
                        userName: commentary.user_name,
                        postId: commentary.post_id,
                        parentId: commentary.parent_id
                    }
                })
            };
        }
    },
    commentary: {
        create: (response) => {
            return {
                ...response,
                parentId: response.parent_id,
                postId: response.post_id,
                createdAt: response.created_at,
                userName: response.user_name
            }
        }
    }
};
