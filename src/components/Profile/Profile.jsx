import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
    <div>
        <div>
            <img src='https://www.seonews.ru/upload/medialibrary/2d7/2d7a50bf0f6a956bbfcc00b13e25dab2.jpg' alt=''/>
        </div>
        <div>
            avatar + discription
        </div>
        <MyPosts/>
    </div>
);
export default Profile