import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fethPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};

