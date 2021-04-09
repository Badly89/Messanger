import React, { useEffect } from "react";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import "../styles/style.css";
import { useSelector } from "react-redux";

export const MessageField = ({ onSendMessage }) => {
  const msg = useSelector((state) => state.messages);
  console.log(msg.messages);

  return (
    <>
      <div className="message-field">
        {msg.messages.map(({ id, text, sender }) => (
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
