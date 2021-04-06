import React from "react";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import "../styles/style.css";

export const MessageField = ({ messages, onSendMessage }) => {
  return (
    <>
      <div className="message-field">
        {messages.map(({ text, sender, id }) => (
          <div
            key={id}
            className="message"
            style={{
              alignSelf: sender == AUTHORS.BOT ? "flex-start" : "flex-end",
            }}
          >
            <div>{text}</div>
            <div className="message-sender">{sender}</div>
          </div>
        ))}
      </div>
      <InputText onSendMessage={onSendMessage} />
    </>
  );
};
