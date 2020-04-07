import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost(text);
        // newPostElement.current.value = '';
        props.addPost();
        // props.onTextChanged('');
    };
    let onTextChanged = () => {
        let text = newPostElement.current.value;
        props.onTextChanged(text);
    };
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onTextChanged} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
};
export default MyPosts