import React from 'react';
import {useLoaderData} from "react-router-dom";
import PostComment from "../PostComment/PostComment.jsx";

const PostComments = () => {
    const postComments = useLoaderData();
    console.log(postComments);
    return (
        <div>
            {
                postComments.map(postComment => <PostComment postComment={postComment} key={postComment.id} />)
            }
        </div>
    );
};

export default PostComments;