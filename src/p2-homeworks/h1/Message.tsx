import React from 'react'
import {MessageType} from "./HW1";
import style from './Message.module.css'

function Message(props: MessageType) {
    const {avatar, name, message, time} = props;
    return (
        <div className={style.message}>
            <div className={style.imageContainer}><img src={avatar} alt="avatar"/></div>
            <div className={style.messageContainer}>
                <div className={style.name}>{name}</div>
                <div className={style.messageBody}>{message}</div>
                <div className={style.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message;