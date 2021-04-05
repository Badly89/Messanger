import React from "react";
import { AUTHORS } from "../utils/constant";
import "../styles/style.css";

export const MessageField = ({ messages }) => {
  return (
    <>
      {messages.map(({ text, sender }, index) => (
        <div
          key={index}
          className="message"
          style={{
            alignSelf: sender == AUTHORS.BOT ? "flex-start" : "flex-end",
          }}
        >
          <div>{text}</div>
          <div className="message-sender">{sender}</div>
        </div>
      ))}
    </>
  );
};
