import _ from "lodash";
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostAndUsers = () => async dispatch => {
    console.log('about to fetch posts!')
    await dispatch(fethPosts());
    console.log('fetched posts!')
};

export const fethPosts = () => async dispatch => {
    const response = await  jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });




