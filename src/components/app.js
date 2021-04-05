import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import "../styles/style.css";

const messagesBot = {
  id1: [{ text: "Привет! комната №1", sender: AUTHORS.BOT, id: "1" }],
  id2: [{ text: "Привет! комната №2", sender: AUTHORS.BOT, id: "2" }],
  id3: [{ text: "Привет! комната №3", sender: AUTHORS.BOT, id: "3" }],
};
export const App = () => {
  const { chatId } = useParams();
  console.log(chatId);
  const [messages, setMessages] = useState(messagesBot);
  const sendMessage = useCallback(
    (newMessage) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [
          ...prevMess[chatId],
          { ...newMessage, id: prevMess[chatId].length + 1 },
        ],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    const lastMessages = messages[chatId]?.[messages[chatId]?.length - 1];
    let timeout;
    if (lastMessages?.sender == AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "Не приставай ко мне, я робот!",
          sender: AUTHORS.BOT,
          id: messages[chatId].length + 1,
        });
      }, 2000);
    }
  }, [messages, sendMessage]);

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <div className="message-field">
            <MessageField messages={messages[chatId]} />
          </div>
          <InputText onSendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

/*сдача ДЗ */
