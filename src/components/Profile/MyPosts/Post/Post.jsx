import React from 'react';
import s from './Post.module.css'

const Post = (props) => (
    <div className={s.item}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdZJR0V-0Gj4v1fYHNoYvF0zHUqKK9q0CnMN8-_ve9AcX1nJUx"
            alt="" className=""/>
        {props.name}, {props.age}
        <div>
            <span>Like {props.like}</span>
        </div>
    </div>
);
export default Post