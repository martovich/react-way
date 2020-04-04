import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post name={post.name} age={post.age} like={post.like}/>);
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
};
export default MyPosts