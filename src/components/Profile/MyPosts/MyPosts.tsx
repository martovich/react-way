import React from 'react';
import s from './MyPost.module.css'
import Post, {PostType} from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostType = {

}

type PropsType = {
    posts: Array<PostType>
    newPostText
    addPost : () => void
}

const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        //let action = addPostActionCreator();
       // props.dispatch(action);
        props.addPost();
    };
    let onPostChanged = () => {
        let text = newPostElement.current.value;
        //let action = updateNewPostTextActionCreator(text);
        //props.dispatch(action);
        props.updateNewPostText(text);
    };
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChanged} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
};
export default MyPosts