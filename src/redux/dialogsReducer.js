const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newId = Math.max.apply(Math, state.messages.map((o) => {
                return o.id + 1;
            }));
            state.messages.push({id: newId, message: body});
            return state;
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