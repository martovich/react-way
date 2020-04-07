import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = props.state.messages.map(msg => <Message id={msg.id} message={msg.message}/>);
    let newMsgElement = React.createRef();
    let addMsg = () => {
        let text = newMsgElement.current.value;
        alert(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesElements}
            </div>
            <div>
                <textarea ref={newMsgElement}></textarea>
            </div>
            <div>
                <button onClick={addMsg}>Add message</button>
            </div>
        </div>)

};

export default Dialogs