import React from "react";
import { InputText } from "./input";
import { Message } from "./message";
import { AUTHORS } from "../utils/constant";

import "../styles/style.css";

export const MessageField = ({ messages, onSendMessage, onDelMessage }) => {
  return (
    <>
      <div className="right-side chat-content flex-grow-1">
        <div className="message-field ">
          {messages?.map((message, i) => (
            <div
              key={i}
              className="message"
              style={{
                alignSelf:
                  message.sender == AUTHORS.BOT ? "flex-start" : "flex-end",
              }}
            >
              <Message message={message} onDelMessage={onDelMessage} />
            </div>
          ))}
        </div>
        <InputText onSendMessage={onSendMessage} />
      </div>
    </>
  );
};
