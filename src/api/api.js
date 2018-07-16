import config from './api.config.js';

export default {
    getCSRFToken: () => {
        return fetch(config.urls.auth.csrfToken, {
            method: 'GET',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((json) => json['csrfToken']);
    },

    createCommentary: () => {
        return fetch(config.urls.commentary.create)
        // method: 'GET',headers: {'X-Requested-With': 'XMLHttpRequest'}, credentials: 'include'
        .then((response) => response.json());
    }
};
