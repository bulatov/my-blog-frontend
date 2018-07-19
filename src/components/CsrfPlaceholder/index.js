import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CsrfPlaceholder extends Component {
    static propTypes = {
        token: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        const { token, name } = this.props;

        return (
            <input type="text" name={name} value={token} hidden readOnly />
        );
    }
}
