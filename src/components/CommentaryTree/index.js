import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Commentary from '../Commentary';

export default class CommentaryTree extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    static defaultProps = {
        comments: []
    };

    buildGraph() {
        const graph = {};

        this.props.comments.forEach((comment) => {
            graph[comment.id] = [];
        });

        this.props.comments.forEach((comment) => {
            if (comment.parentId === null) {
                return;
            }

            graph[comment.parentId].push(comment);
        });

        return graph;
    }

    /**
     * Returns array of comment objects in order of dfs
     * @param  {Object} from  comment object
     * @param  {number} depth depth of `from` node
     * @return {Array}
     */
    dfs(from, depth) {
        let subTreeOrder = [{...from, depth}];

        this.graph[from.id].forEach((to) => {
            subTreeOrder = subTreeOrder.concat(this.dfs(to, depth + 1));
        });

        return subTreeOrder;
    }

    /**
     * Returns array of comments as React components
     * @return {array}
     */
    getCommentaryComponentList() {
        const { comments, ...restProps } = this.props;
        let commentsByDfsOrder = [];

        this.graph = this.buildGraph();

        comments.forEach((comment) => {
            if (comment.parentId === null) {
                commentsByDfsOrder = commentsByDfsOrder.concat(this.dfs(comment, 0));
            }
        });

        return commentsByDfsOrder.map((comment, index) => {
            return <Commentary {...restProps} {...comment} key={index} />;
        });
    }

    render() {
        return (
            <div>
                {this.getCommentaryComponentList()}
            </div>
        );
    }
}
