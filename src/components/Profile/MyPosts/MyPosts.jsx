import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let posts = [
        {id: 1, name: "Artem", age:30, like:3},
        {id: 2, name: "Dima", age:29, like:13},
        {id: 3, name: "Marat", age:32, like:18},
        {id: 4, name: "Nika", age:20, like:5}
    ]
    let postsElements = posts.map(post => <Post name={post.name} age={post.age} like={post.like}/>);
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