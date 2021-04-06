import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import "../styles/style.css";

const messagesBot = {
  id1: [{ text: "Привет! комната №1", sender: AUTHORS.BOT, id: "id1-1" }],
  id2: [{ text: "Привет! комната №2", sender: AUTHORS.BOT, id: "id2-1" }],
  id3: [{ text: "Привет! комната №3", sender: AUTHORS.BOT, id: "id3-1" }],
};

const chatList = [
  {
    roomId: "id1",
    name: "Комната №1",
  },
  {
    roomId: "id2",
    name: "Комната №2",
  },
  {
    roomId: "id3",
    name: "Комната №3",
  },
];

export const App = () => {
  const { chatId } = useParams();
  console.log(chatId);
  const [messages, setMessages] = useState(messagesBot);
  const [rooms, setRoom] = useState(chatList);
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

  const addRoom = useCallback((newRoom) => {
    setRoom((prevRoom) => [...prevRoom, newRoom]);
  }, []);

  useEffect(() => {
    const lastMessages = messages[chatId]?.[messages[chatId]?.length - 1];
    let timeout;
    if (lastMessages?.sender == AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "Не приставай ко мне, я робот!",
          sender: AUTHORS.BOT,
          id: `${chatId}-${messages[chatId].length + 1}`,
        });
      }, 2000);
    }
  }, [messages, sendMessage]);

  return (
    <>
      <div className="layout">
        <ChatList rooms={rooms} onAddRoom={addRoom} />
        <div className="chat-content">
          <MessageField
            messages={messages[chatId]}
            onSendMessage={sendMessage}
          />
        </div>
      </div>
    </>
  );
};

/*сдача ДЗ */
