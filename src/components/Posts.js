import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
    // we no longer need the constructor because the state will come from redux

    async componentDidMount() {
        await this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

// we should map our props to propTypes
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    // we are using state.posts because in reducers/index.js posts for the postReducer
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts);