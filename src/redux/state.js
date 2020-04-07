let rerenderEntireTree = () => {

};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Artem", likesCount: 3},
            {id: 2, message: "Dima", likesCount: 13},
            {id: 3, message: "Marat", likesCount: 18},
            {id: 4, message: "Nika", likesCount: 5}
        ],
        newPostText : ''
    },
    messagesPage: {
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
            {id: 3, message: "Yo"}
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const onTextChanged = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;
