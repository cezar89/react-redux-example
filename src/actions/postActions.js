import { FETCH_POSTS, NEW_POSTS } from './types';


export const fetchPosts = () => {

    // we are calling dispatch
    // think of dispatch as of an resolver and a promise where we want to send the data we call dispatch
    // dispatch function is available from the outside context
    return async (dispatch) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();

        console.log('Posts json: ', posts);

        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
    };
}

export const createPost = (postData) => {

    // we are calling dispatch
    // think of dispatch as of an resolver and a promise where we want to send the data we call dispatch
    // dispatch function is available from the outside context
    return async (dispatch) => {

        const responseData = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)  
        });

        const responseJson = await responseData.json();

        dispatch({
            type: NEW_POSTS,
            payload: responseJson
        });
    };
}