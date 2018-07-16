const apiRoot = 'http://api.myblog.test';

export default {
    apiRoot,
    urls: {
        auth: {
            login: `${apiRoot}/site/login`,
            logout: `${apiRoot}/site/logout`,
            csrfToken: `${apiRoot}/site/csrf-token`,
        },
        commentary: {
            create: `${apiRoot}/commentary/create`,
            delete: `${apiRoot}/commentary/delete`,
        },
        post: {}
    },
};
