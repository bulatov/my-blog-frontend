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

    getGraph() {
        const graph = {};

        this.props.comments.forEach((comment) => {
            graph[comment.id] = [];
        });

        this.props.comments.forEach((comment) => {
            if (!comment.parentId) {
                return;
            }

            graph[comment.parentId].push(comment);
        });

        return graph;
    }

    dfs(from, depth) {
        this.used[from.id] = true;

        let subTreeOrder = [...from, depth];

        this.graph[from.id].forEach((to) => {
            subTreeOrder = subTreeOrder.concat(this.dfs(to, depth + 1));
        });

        return subTreeOrder;
    }

    getCommentaryComponentList() {
        const commentaryComponentList = [];
        const { comments, ...restProps } = this.props;

        this.used = {};
        this.graph = this.getGraph();

        comments.forEach((comment) => {
            if (!this.used[comment.id]) {
                const commentsByDfsOrder = this.dfs(comment, 0);
                commentaryComponentList.concat(commentsByDfsOrder);
            }
        });
        console.log('QQQQ', commentaryComponentList);
        return commentaryComponentList;
    }

    render() {

        return (
            <div>
                {
                    //comments.map((comment, index) => <Commentary {...restProps} {...comment} key={index} />)
                    this.getCommentaryComponentList()
                }
            </div>
        );
    }
}
