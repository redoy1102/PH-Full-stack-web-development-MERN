import React from 'react';
import {useLoaderData} from "react-router-dom";
import Post from "../Post/Post.jsx"

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    const {id} = posts;

    return (
        <div>
            {
                posts.map(post => <Post post={post} key={id}></Post>)
            }
        </div>
    );
};

export default Posts;