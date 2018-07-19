import React, { Component } from 'react';

export default function withAjax(WrappedComponent, ajaxAction, handlers = {}) {
    return class extends Component {
        state = {
            data: {}
        };

        constructor(props) {
            super(props);
            // bind handlers to this container
            // so we can change state inside handlers by calling this.setState()
            for (let key in handlers) {
                handlers[key] = handlers[key].bind(this);
            }
        }

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
