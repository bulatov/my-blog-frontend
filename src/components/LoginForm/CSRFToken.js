import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../api/api.js';

export default class CSRFToken extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    state = {
        csrfToken: ''
    };

    componentDidMount() {
        api.getCSRFToken()
        .then((csrfToken) => {
            this.setState({ csrfToken });
        });
    }

    render() {
        const { name } = this.props;

        return (
            <input type="text" name={name} value={this.state.csrfToken} hidden />
        );
    }
}