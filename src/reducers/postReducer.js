import { FETCH_POSTS, NEW_POSTS} from '../actions/types';

const initialState = { 
    // items - represent the posts that will come from the action, that will make the fetch request
    items: [],
    // item - represent the single post that we will add
    item: {}
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer FETCH_POSTS');
            return {
                // everything from the old state
                ...state,
                // overwrite the items state with the new data from the postActions
                items: action.payload
            };
        case NEW_POSTS:
            console.log('reducer NEW_POSTS');
            return {
                // everything from the old state
                ...state,
                items: [action.payload, ...state.items],
                // overwrite the item state with the new data from the postActions
                item: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;