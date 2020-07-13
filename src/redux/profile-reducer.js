const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Artem", likesCount: 3},
        {id: 2, message: "Dima", likesCount: 13},
        {id: 3, message: "Marat", likesCount: 18},
        {id: 4, message: "Nika", likesCount: 5}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            // state.posts.push(newPost);
            // state.newPostText = '';
            // return state;
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopyU = {...state};
            stateCopyU.newPostText = action.newText;
            // state.newPostText = action.newText;
            // return state;
            return stateCopyU;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    });
export default profileReducer;