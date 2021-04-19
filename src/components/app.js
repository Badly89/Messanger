import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messagefield";
// import { AUTHORS } from "../utils/constant";
import { ChatList } from "./chatlist";
import { useParams } from "react-router";
import { selectMessages } from "../store/messages/selectors";
import { actionDelMessage, actionMessage } from "../store/messages/actions";
import "../styles/style.css";
import { useDispatch, useSelector, connect } from "react-redux";

export const App = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  const sendNewMessage = useCallback(
    (newMessage) => {
      dispatch(
        actionMessage(chatId, {
          ...newMessage,
          id: `${chatId}-${(messages[chatId]?.length || 0) + 1}`,
        })
      );
    },
    [chatId, messages]
  );
  const delMessages = useCallback(
    (selMessage) => {
      dispatch(
        actionDelMessage(chatId, {
          ...selMessage,
          id: `${chatId}-${(messages[chatId]?.length || 0) - 1}`,
        })
      );
    },
    [chatId, messages]
  );

  return (
    <>
      <div className="layout">
        <ChatList />
        <div className="chat-content">
          <MessageField
            messages={messages[chatId]}
            onSendMessage={sendNewMessage}
            onDelMessage={delMessages}
          />
        </div>
      </div>
    </>
  );
};
