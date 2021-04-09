import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import { sendMessage } from "../store/messages/actions";
import "../styles/style.css";
import { useDispatch, useSelector, connect } from "react-redux";

// const messagesBot = {
//   id1: [{ text: "Привет! комната №1", sender: AUTHORS.BOT, id: "id1-1" }],
//   id2: [{ text: "Привет! комната №2", sender: AUTHORS.BOT, id: "id2-1" }],
//   id3: [{ text: "Привет! комната №3", sender: AUTHORS.BOT, id: "id3-1" }],
// };

export const App = (props) => {
  const { chatId } = useParams();

  console.log(props);
  console.log(chatId);
  const msg = useSelector((state) => state.message);

  const addMessage = (newMessage) => {
    props.setNewMsg(newMessage);
  };
  console.log(msg);

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <MessageField onSendMessage={addMessage} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.messages,
  // name: state.,
});

const mapDispatchToProps = {
  setNewMsg: sendMessage,
};
export const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App);

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
// console.log(messageList);
// useEffect(() => {
//   const lastMessages = messages[chatId]?.[messages[chatId]?.length - 1];
//   let timeout;
//   if (lastMessages?.sender == AUTHORS.HUMAN) {
//     timeout = setTimeout(() => {
//       sendMessage({
//         text: "Не приставай ко мне, я робот!",
//         sender: AUTHORS.BOT,
//         id: `${chatId}-${messages[chatId].length + 1}`,
//       });
//     }, 2000);
//   }
//
// }, [messages, sendMessage]);
