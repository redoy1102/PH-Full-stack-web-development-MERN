import {Link, useLoaderData, useNavigate} from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <p>Post id: {id}</p>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}/comments`}>See Comments</Link> <br/>
            <button onClick={() => handleGoBack()}>Go Back</button>
        </div>
    );
};

export default PostDetails;