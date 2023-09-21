import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../features/posts/postsSlice';

function Messages() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.posts.messages);

    useEffect(() => {
        
    })
}