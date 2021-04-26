import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
import { AUTHORS } from "../utils/constant";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import { sendMessage, sendMessageWithTimeout } from "../store/messages/actions";
import "../styles/style.css";
import { useDispatch, useSelector, connect } from "react-redux";

export const App = (props) => {
  const { chatId } = useParams();

  const sendNewMessage = useCallback(
    (newMessage) => {
      props.setNewMsg(chatId, {
        ...newMessage,
        id: `${chatId}-${(props.messages[chatId]?.length || 0) + 1}`,
      });
    },
    [chatId, props.messages]
  );
  useEffect(() => {
    props.botMessage(chatId, {
      text: "Не приставай ко мне, я робот!",
      sender: AUTHORS.BOT,
      id: `${chatId}-${props.messages[chatId]?.length + 1}`,
    });
  }, [props.messages, sendNewMessage]);

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <MessageField
            messages={props.messages[chatId]}
            onSendMessage={sendNewMessage}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  // chatId: state.messages.messages.chatId,
});

const mapDispatchToProps = {
  setNewMsg: sendMessage,
  botMessage: sendMessageWithTimeout,
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
