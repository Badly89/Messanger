import React, { useEffect, useCallback, useState } from "react";
import {MessageField} from './MessageField';
import {AUTHOR } from '../utils/constant';
import {Input} from './input';
import "../styles/style.css";

const messagesBot = [
  { text: "Привет!", sender: AUTHOR.BOT },
  { text: "Как дела?", sender: AUTHOR.BOT },
];


export const App = () => {
  const [messages, setMessages] = useState(messagesBot);

  const sendMessage = useCallback((newMessage) => { 
    setMessages((prevMess) => [...prevMess, newMessage]); }
    ,[]);


  useEffect(() => {
    const lastMess = messages[messages-1];
    let timer;

     if(lastMess.sender === AUTHOR.HUMAN){
     timer = setTimeout(() => {
            sendMessage({text: "Не приставай ко мне, я робот!", sender: AUTHOR.BOT });
            }, 1000);       
      }
     return()=>clearTimeout(timer);
  }, [messages]);


  return (
    <>
    <MessageField messages={messages} />
    <Input onSendMessage = {sendMessage} />
    </>
  );
};
