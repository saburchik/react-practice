import React from "react";
import PostItem from "./PostItem";


const PostList = ({ props, posts, headTitle }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{headTitle}</h1>
            <PostItem />
        </div>
    )
}

export default PostList