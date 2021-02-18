import React from 'react';
import { useDispatch } from "react-redux";
import { deleteData } from "./../action/action";
import { Link } from "react-router-dom";

const Post = (props) => {
    const dispatch = useDispatch();

    var deletePost = (e) => {
        e.preventDefault();
        dispatch(deleteData(props.post.id));
    };

    return (
        <div className="post-container">
            <small>{props.post.id}</small>
            <p><b>{props.post.name}</b></p>
            <p>{props.post.genre}</p>
            <small>{props.post.year}</small>
            <p><i>{props.post.description}</i></p>
            <p>{props.post.rating}</p>
            <Link to={{ pathname: '/form', query: { type: "EDIT", id: props.post.id } }}>
                <button>Edit</button>
            </Link>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

export default Post;