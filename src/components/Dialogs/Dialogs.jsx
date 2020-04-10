import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = props.state.messages.map(msg => <Message id={msg.id} message={msg.message}/>);
    let newMessageBody = props.state.newMessageBody;
    // let newMsgElement = React.createRef();
    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.dispatch(action);
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.dispatch(action);
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