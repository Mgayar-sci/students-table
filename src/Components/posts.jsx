import React, { useEffect, useState } from 'react';
import './posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="posts-container">
            <h1>Posts</h1>
            <ul className="posts-list">
                {posts.map(post => (
                    <li key={post.id} className="post">
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-content'>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;