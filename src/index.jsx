import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state,{addPost, onTextChanged, subscribe} from './redux/state';
import {HashRouter} from "react-router-dom";
// import state from "./redux/state";
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
    ReactDOM.render(<HashRouter><App state={state} addPost={addPost} onTextChanged ={onTextChanged}/></HashRouter>, document.getElementById('root'));
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();
