import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = state.messages.map(msg => <Message id={msg.id} message={msg.message}/>);
    let newMessageBody = state.newMessageBody;
    // let newMsgElement = React.createRef();
    let onSendMessageClick = () => {
        // let action = sendMessageCreator();
        // props.store.dispatch(action);
        props.onSendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        // let action = updateNewMessageBodyCreator(body);
        // props.store.dispatch(action);
        props.onUpdateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={newMessageBody}
                            onChange={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>)

};

export default Dialogs