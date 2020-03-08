import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPosts = () => (
    <div className={s.posts}>
        <Post name = 'Artem' age = '30'/>
        <Post name = 'Dima' age = '29'/>
        <Post name = 'Marat' age = '32'/>
        <Post name = 'Nika' age = '20'/>
    </div>

);
export default MyPosts