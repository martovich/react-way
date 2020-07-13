import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
    <div>
        <ProfileInfo/>
        {/*<MyPostsContainer store={props.store} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} dispatch={props.dispatch}/>*/}
        <MyPostsContainer store={props.store}/>
    </div>
);
export default Profile