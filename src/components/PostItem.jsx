import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__item">
                <div className="post__content">
                    <h2>{props.number}. {props.post.title}</h2>
                    <p>{props.post.body}</p>
                </div>
                <div className="post__btn">
                    <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem