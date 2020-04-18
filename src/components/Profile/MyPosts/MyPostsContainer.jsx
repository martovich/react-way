import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let addPost = () => {
       let action = addPostActionCreator();
        props.store.dispatch(action);
    };
    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (<MyPosts updateNewPostText={onPostChanged}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
};
export default MyPostsContainer