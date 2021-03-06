import React from 'react';
import s from './Post.module.css'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdZJR0V-0Gj4v1fYHNoYvF0zHUqKK9q0CnMN8-_ve9AcX1nJUx"
                alt="" className=""/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>);
};
export default Post