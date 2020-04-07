import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
    <div>
        <ProfileInfo/>
        <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addPost={props.addPost} onTextChanged={props.onTextChanged}/>
    </div>
);
export default Profile