import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Artem", likesCount: 3},
                {id: 2, message: "Dima", likesCount: 13},
                {id: 3, message: "Marat", likesCount: 18},
                {id: 4, message: "Nika", likesCount: 5}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valery"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('rerender')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;