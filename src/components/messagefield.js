import React, { useEffect } from "react";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import "../styles/style.css";
import { useSelector } from "react-redux";

export const MessageField = ({ messages, onSendMessage }) => {
  return (
    <>
      <div className="message-field">
        {messages?.map(({ id, text, sender }) => (
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
