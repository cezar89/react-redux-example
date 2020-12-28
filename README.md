# react-redux-example
A react redux example

For node packages:
npm instal

For running the code:
npm start


Redux works without react.
We are going to use it with react because react has a specialized library callde react-redux(this binds together react and redux)
We are going to use redux-thunk - middleware for redux - this will allow us to use the dispatch method to use async calls
To install all of these, use:
npm i redux react-redux redux-thunk

Provider is a react component that is the glue between react and redux
We want to wrap our application with the Provider component(we will wrap App component)

Provider takes a store. The store will hold the state. https://redux.js.org/api/store

The store will use as middleware the react-thunk
The store will have a Root Reducer. This will bundle all the reducers for your states(todoReducer, postReducer)

PostReducer for example will have actions that we need to do with posts. EX: fetch posts data or create a new post.

The thunk middleware alows us to use the dispach function directly, so we can make async requests 

Connect method from react-redux is used in our react component to connect the redux store with our component. The store from the provider comp.
We also want to import the action that will change the store, inside our component. EX: fetchPosts function from actions.
And finally we have to export our component with connect method on it. 
    First param of connect is where we map our state our props.
    Second param is the action method. EX: fetchPosts
    EX in Posts component: export default connect(null, {fetchPosts})(Posts)

Now to get the new state(with the fetched posts) into our component, we have to use a method named mapStateToProps.
This will take a state and set the posts from the state.posts.items.
With this we can now use the new state from the props of that component.
We will basically replace the this.state.posts with this.props.posts
EX for Posts.js
    const mapStateToProps = state => ({
        // we are using state.posts because in reducers/index.js posts for the postReducer
        posts: state.posts.items
    })

    export default connect(mapStateToProps, {fetchPosts})(Posts);

We could use Redux chrome extension for our browser to check the redux state.
    To add it to our project we have to add our store and add the redux extension as an enhancer.
    We have to bring from redux the compose function.
    We wrap the applyMiddleware with compose, to add multiple enhancers.
    And finally we add the enhancers for the Redux Dev tools.
    Ex in store.js:
        const store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(...middleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
