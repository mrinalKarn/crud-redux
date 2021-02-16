import React from 'react';
import { useDispatch } from "react-redux";
import { deleteData } from "./../action/action";
import { Link } from "react-router-dom";

const Post = (props) => {
    const dispatch = useDispatch();

    var deletePost = (e) => {
        e.preventDefault();
        //console.log(props.post.id);
        dispatch(deleteData(props.post.id));
    };

    return (
        <div>
            <p>{props.post.id}</p>
            <p>{props.post.name}</p>
            <p>{props.post.genre}</p>
            <p>{props.post.year}</p>
            <p>{props.description}</p>
            <p>{props.rating}</p>
            <Link to={{ pathname: '/form', query: { type: "EDIT", id: props.post.id } }}>
                <button>Edit</button>
            </Link>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

export default Post;