import React from "react";
import {Message} from './Message';
import "../styles/style.css";

export const MessageField = ({messages})=>{
  return messages.map(({ text, sender }, index) => (
    <Message text={text} sender={sender} key={index} />
  ));
};
  
