import config from './ApiService.config.js';

const fetchOptions = {
    method: 'GET',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    credentials: 'include'
};

const ApiService = {
    getCsrfToken: () => {
        return fetch(config.urls.auth.csrfToken, fetchOptions)
        .then((response) => response.json())
        .then((json) => json['csrfToken']);
    },

    createCommentary: () => {
        return fetch(config.urls.commentary.create, fetchOptions)
        .then((response) => response.json());
    }
};

export default ApiService;
