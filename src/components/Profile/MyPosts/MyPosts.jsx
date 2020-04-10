import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };
    let onPostChanged = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChanged} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
};
export default MyPosts