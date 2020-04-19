import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//     let addPost = () => {
//        let action = addPostActionCreator();
//         props.store.dispatch(action);
//     };
//     let onPostChanged = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     };
//     return (<MyPosts updateNewPostText={onPostChanged}
//                      addPost={addPost}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}/>)
// };

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText : (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost : () => {
            dispatch(addPostActionCreator());
        }
    }
};
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer