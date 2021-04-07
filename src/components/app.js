import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import { sendMessage } from "../store/messages/actions";
import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";

const messagesBot = {
  id1: [{ text: "Привет! комната №1", sender: AUTHORS.BOT, id: "id1-1" }],
  id2: [{ text: "Привет! комната №2", sender: AUTHORS.BOT, id: "id2-1" }],
  id3: [{ text: "Привет! комната №3", sender: AUTHORS.BOT, id: "id3-1" }],
};

export const App = () => {
  const { chatId } = useParams();

  console.log(chatId);
  const state = useSelector((state) => state.messages);
  // const [message, setMessages] = useState(state.messages);
  console.log(state);
  const dispatch = useDispatch();
  const addMessage = () => {
    dispatch(sendMessage(state.messages));
  };

  // const sendMessage = useCallback(
  // (newMessage) => {
  //   setMessages((prevMess) => ({
  //     ...prevMess,
  //     [chatId]: [
  //       ...prevMess[chatId],
  //       { ...newMessage, id: prevMess[chatId].length + 1 },
  //     ],
  //   }));
  // },

  // [chatId]
  // );

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <MessageField messages={state.messages} onSendMessage={addMessage} />
        </div>
      </div>
    </>
  );
};
