import config from '../config/backend.config.js';
import normalize from '../helpers/normalize.js';

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
            .then(response => response.json())
            .then(json => normalize.commentary.create(json))
        },

        edit: (commentaryId, content) => new Promise.resolve(),

        delete: (commentaryId) => new Promise.resolve()
    },

    post: {
        get: (id) => {
            // return new Promise((resolve, reject) => {
            //     resolve({
            //         id: 3,
            //         userName: 'admin',
            //         createdAt: 1531825574387,
            //         title: 'post-title-mock',
            //         content: 'post-content-mock',
            //         comments: [
            //             {
            //                 id: 1,
            //                 userName: 'frt',
            //                 createdAt: 1531825574387,
            //                 parentId: null,
            //                 content: 'my comment'
            //             },
            //             {
            //                 id: 2,
            //                 userName: 'frt',
            //                 createdAt: 1531825574387,
            //                 parentId: 1,
            //                 content: 'my comment inside my comment..'
            //             }
            //         ]
            //     });
            // });
            return fetch(`${config.urls.post.get}/${id}`, fetchOptions)
            .then(response => response.json())
            .then(json => normalize.post.get(json))
        },

        create: () => {
            return new Promise((resolve, reject) => {
                resolve({
                    id: 2,
                    userName: 'admin',
                    createdAt: 1531825574387,
                    title: 'post-title-mock',
                    content: 'post-content-mock',
                });
            });
        },

        edit: (postId, title, content) => new Promise.resolve(),

        delete: () => new Promise.resolve()
    },

    blog: {
        get: () => {
            // return new Promise((resolve, reject) => {
            //     resolve({
            //         posts: [
            //             { id: 1, userName: 'admin', createdAt: 1531825574387, title: 'post-title-mock', content: 'post-content-mock' },
            //             { id: 2, userName: 'admin', createdAt: 1531825574387, title: 'post-title-mock', content: 'post-content-mock' },
            //             { id: 3, userName: 'admin', createdAt: 1531825574387, title: 'post-title-mock', content: 'post-content-mock' },
            //         ]
            //     });
            // });
            return fetch(config.urls.blog.get, fetchOptions)
            .then(response => response.json())
            .then(json => normalize.blog.get(json))
        }
    }
};

export default ApiService;
