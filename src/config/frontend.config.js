const frontendRoot = 'http://localhost:3000';

export default {
    frontendRoot,
    urls: {
        auth: {
            login: `${frontendRoot}/login`,
        },
        post: {
            get: `${frontendRoot}/post`,
        },
        blog: {
            get: `${frontendRoot}/posts`
        }
    },
};
