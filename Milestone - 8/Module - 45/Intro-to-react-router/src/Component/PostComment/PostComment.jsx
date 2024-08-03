import React from 'react';
import {useNavigate} from "react-router-dom";

const PostComment = ({postComment}) => {
    const {id, name, body} = postComment;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div>
                <p>{id}</p>
                <h3>{name}</h3>
                <p>Comment: {body}</p>
            </div>
            <button onClick={() => handleGoBack()}>Back</button>
        </div>
    );
};

export default PostComment;