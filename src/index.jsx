import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {HashRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';


let rerenderEntireTree = (state) => {
    ReactDOM.render(<HashRouter><App state={state} dispatch={store.dispatch.bind(store)}/></HashRouter>, document.getElementById('root'));
};
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
