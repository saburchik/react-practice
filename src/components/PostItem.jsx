import React from "react";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__item">
                <div className="post__content">
                    <h2>Имена</h2>
                </div>
                <div className="post__btn">
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem