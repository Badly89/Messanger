import React, { useCallback } from "react";
import { MessageField } from "./messagefield";

import { ChatList } from "./chatlist";
import { Redirect, useParams } from "react-router";
import { selectMessages } from "../store/messages/selectors";
import { actionMessage, actionDelMessage } from "../store/messages/actions";
import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";

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
        })
      );
    },

    [messages]
  );

  return (
    <>
      <div className="layout">
        <ChatList />
        <section className="chat-content">
          <MessageField
            messages={messages[chatId]}
            onSendMessage={sendNewMessage}
            onDelMessage={delMessages}
          />
        </section>
      </div>
    </>
  );
};
