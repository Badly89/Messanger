import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import { Header } from "./header";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import "../styles/style.css";

const messagesBot = [
  { text: "Привет!", sender: AUTHORS.BOT, id: "1" },
  { text: "Как дела?", sender: AUTHORS.BOT, id: "2" },
];
export const App = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(messagesBot);
  const sendMessage = useCallback((newMessage) => {
    setMessages((prevMess) => [...prevMess, newMessage]);
  }, []);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timeout;
    if (lastMessages?.sender !== AUTHORS.BOT) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "Не приставай ко мне, я робот!",
          sender: AUTHORS.BOT,
          id: messages.length + 1,
        });
      }, 2000);
    }
  }, [messages]);

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <div className="message-field">
            <MessageField messages={messages} />
          </div>
          <InputText onSendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

/*сдача ДЗ */
