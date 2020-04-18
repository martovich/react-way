import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = state.messages.map(msg => <Message id={msg.id} message={msg.message}/>);
    let newMessageBody = state.newMessageBody;
    // let newMsgElement = React.createRef();
    let sendMessage = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    };

    let updateNewMessageBody = (body) => {
        // let body = e.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    };

    return (<Dialogs dialogs={state.dialogs} onSendMessage={sendMessage} onUpdateNewMessageBody={updateNewMessageBody}/>)

};

export default DialogsContainer