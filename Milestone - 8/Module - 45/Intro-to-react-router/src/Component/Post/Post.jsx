import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}>Details</Link>
        </div>
    );
};

export default Post;