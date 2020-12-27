import React, { Component } from 'react'

export default class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        const responseData = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        });

        const responseJson = await responseData.json();
        console.log('responseJson', responseJson);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br />
                        <input
                            name="body"
                            type="text"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
