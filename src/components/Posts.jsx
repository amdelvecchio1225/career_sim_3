import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setLoading, setError } from '../features/posts/slice';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const status = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(setLoading());
            fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('HTTP error.')
                    }
                    return response.json();
                })
                .then((dt) => {
                    dispatch(setPosts(dt.data.posts));
                })
                .catch((err) => {
                    dispatch(setError(err.message));
                })
        } 
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: (error)</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => {
                    <li key={post._id}>{post.title}</li>
                })}
            </ul>
        </div>
    );
}

export default Posts;