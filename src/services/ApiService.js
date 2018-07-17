import config from './ApiService.config.js';

const fetchOptions = {
    method: 'GET',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    credentials: 'include'
};

const ApiService = {
    getCsrfToken: () => {
        return fetch(config.urls.auth.csrfToken, fetchOptions)
        .then((response) => response.json());
    },

    commentary: {
        create: (postId, content, parentId) => {
            return fetch(`${config.urls.commentary.create}?post_id=${postId}&content=${content}&parent_id=${parentId}`, fetchOptions)
            .then((response) => response.json());
        },

        edit: (commentaryId, content) => new Promise.resolve(),

        delete: (commentaryId) => new Promise.resolve()
    },

    post: {
        get: (postId) => {
            return new Promise((resolve, reject) => {
                resolve({
                    id: 3,
                    userName: 'admin',
                    createdAt: 1531825574387,
                    title: 'post-title-mock',
                    content: 'post-content-mock',
                    comments: [
                        {
                            id: 1,
                            userName: 'frt',
                            createdAt: 1531825574387,
                            parentId: null,
                            content: 'my comment'
                        },
                        {
                            id: 2,
                            userName: 'frt',
                            createdAt: 1531825574387,
                            parentId: 1,
                            content: 'my comment inside my comment..'
                        }
                    ]
                });
            });
        },

        create: () => {
            return new Promise((resolve, reject) => {
                resolve({
                    post: {
                        postId: 2,
                        userName: 'admin',
                        createdAt: 1531825574387,
                        title: 'post-title-mock',
                        content: 'post-content-mock',
                    }
                });
            });
        },

        edit: (postId, title, content) => new Promise.resolve(),

        delete: () => new Promise.resolve()
    },


};

export default ApiService;
