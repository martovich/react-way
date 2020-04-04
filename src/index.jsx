import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valery"}
];
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How"},
    {id: 3, message: "Yo"}
];

let posts = [
    {id: 1, name: "Artem", age:30, like:3},
    {id: 2, name: "Dima", age:29, like:13},
    {id: 3, name: "Marat", age:32, like:18},
    {id: 4, name: "Nika", age:20, like:5}
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
