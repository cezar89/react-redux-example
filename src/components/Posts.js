import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        console.log("hello");
        let postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await postsData.json();
        
        console.log('Posts: ', posts );

        this.setState({posts: posts});
    }
    render() {
        const postItems = this.state.posts.map(post => (
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


export default Posts;