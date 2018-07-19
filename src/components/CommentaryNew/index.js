import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class CommentaryNew extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        cancelButtonText: PropTypes.string.isRequired,
        submitButtonText: PropTypes.string.isRequired,
        showButtons: PropTypes.bool,
        parentId: PropTypes.number,
        onNewCommentarySubmit: PropTypes.func
    };

    static defaultProps = {
        placeholder: '',
        showButtons: false,
        onNewCommentarySubmit: () => {}
    };

    state = {
        showButtons: this.props.showButtons,
        inputValue: ''
    };

    isInputValueEmpty() {
        return this.state.inputValue === '';
    }

    handleInputFocus = () => {
        this.setState({
            showButtons: true
        });
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleCancelButtonClick = () => {
        this.setState({
            showButtons: false,
            inputValue: ''
        });
    }

    handleSubmitButtonClick = () => {
        if (this.props.parentId) {
            this.props.onReplyCommentarySubmit(this.props.match.params.id, this.state.inputValue, this.props.parentId);
        } else {
            this.props.onNewCommentarySubmit(this.props.match.params.id, this.state.inputValue);
        }
    }

    render() {
        const { placeholder, cancelButtonText, submitButtonText } = this.props;
        return (
            <div className="commentary-new">
                <input
                    type="text"
                    placeholder={placeholder}
                    onFocus={this.handleInputFocus}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <div className={`commentary-new__buttons commentary-new__buttons_show_${this.state.showButtons}`}>
                    <input
                        className="commentary-new__button commentary-new__cancel"
                        type="button"
                        value={cancelButtonText}
                        onClick={this.handleCancelButtonClick}
                    />
                    <input
                        className="commentary-new__button commentary-new__submit"
                        type="button"
                        value={submitButtonText}
                        disabled={this.isInputValueEmpty()}
                        onClick={this.handleSubmitButtonClick}
                    />
                </div>
            </div>
        );
    }
}
