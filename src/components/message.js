import React from 'react';
import {AUTHOR} from '../utils/constant';


export const Message =({text, sender})=> (
    <div>{sender}: {text}
    </div>
    // <div className="message" style={{alignSelf: sender === SENDER.BOT ?
    //                 'flex-start' : 'flex-end'}}>
    //         <div>{text}</div>
    //         <div className="message-sender">{sender}</div>
    // </div>
)

