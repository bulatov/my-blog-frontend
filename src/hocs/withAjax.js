import React, { Component } from 'react';

export default function withAjax(WrappedComponent, ajaxAction, handlers) {
    return class extends Component {
        state = {
            data: {}
        };

        componentDidMount() {
            ajaxAction()
            .then((json) => {
                this.setState({
                    data: json
                });
            });
        }

        render() {
            return <WrappedComponent {...this.state.data} {...this.props} {...handlers} />;
        }
    }
}
