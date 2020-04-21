const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            // state.newMessageBody = action.body;
            // return state;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy2 = {...state};
            stateCopy2.messages = [...state.messages];
            let body = state.newMessageBody;
            // state.newMessageBody = '';
            stateCopy2.newMessageBody = '';
            let newId = Math.max.apply(Math, state.messages.map((o) => {
                return o.id + 1;
            }));
            // state.messages.push({id: newId, message: body});
            stateCopy2.messages.push({id: newId, message: body});
            // return state;
            return stateCopy2;
        }
        default :
            return state;
    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (newBody) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: newBody
    });

export default dialogsReducer;