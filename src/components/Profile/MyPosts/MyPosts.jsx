import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPosts = () => (
    <div className={s.posts}>
        <Post name = 'Artem' age = '30' like = '3'/>
        <Post name = 'Dima' age = '29' like = '13'/>
        <Post name = 'Marat' age = '32' like = '18'/>
        <Post name = 'Nika' age = '20' like = '5'/>
    </div>

);
export default MyPosts