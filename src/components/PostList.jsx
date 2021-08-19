import React from "react";
import PostItem from "./PostItem";


const PostList = ({ posts, headTitle }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{headTitle}</h1>
            {posts.map((post) =>
                <PostItem post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList