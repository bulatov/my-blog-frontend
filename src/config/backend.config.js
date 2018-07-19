const backendRoot = 'http://api.myblog.test';

export default {
    backendRoot,
    urls: {
        auth: {
            login: `${backendRoot}/site/login`,
            logout: `${backendRoot}/site/logout`,
            csrfToken: `${backendRoot}/site/csrf-token`,
        },
        commentary: {
            create: `${backendRoot}/commentary/create`,
            edit: `${backendRoot}/commentary/edit`,
            delete: `${backendRoot}/commentary/delete`,
        },
        post: {
            get: `${backendRoot}/post`,
            create: `${backendRoot}/post/create`,
            edit: `${backendRoot}/post/edit`,
            delete: `${backendRoot}/post/delete`,
        },
        blog: {
            get: `${backendRoot}/posts`
        }
    },
};
