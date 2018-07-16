const apiRoot = 'http://yii2basic.test';

export default {
    apiRoot,
    urls: {
        auth: {
            login: `${apiRoot}/site/login`,
            logout: `${apiRoot}/site/logout`,
            csrfToken: `${apiRoot}/site/csrf-token`,
        },
        commentary: {
            create: `${apiRoot}/commentaries/commentary/create`,
        },
        post: {}
    },
};
