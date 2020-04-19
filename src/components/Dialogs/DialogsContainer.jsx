import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;
//     let sendMessage = () => {
//         let action = sendMessageCreator();
//         props.store.dispatch(action);
//     };
//
//     let updateNewMessageBody = (body) => {
//         let action = updateNewMessageBodyCreator(body);
//         props.store.dispatch(action);
//     };
//
//     return (<Dialogs dialogsPage={state}
//                      onSendMessage={sendMessage}
//                      onUpdateNewMessageBody={updateNewMessageBody}/>)
// };
let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body)=>{
            // let action = updateNewMessageBodyCreator(body);
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:()=>{
            // let action = sendMessageCreator();
            dispatch(sendMessageCreator());
        }
    }
};
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer