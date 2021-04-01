import React from "react";
import { Message } from "./message";
import "../styles/style.css";

export const MessageField = ({ messages }) => {
  const messageElement = { messages }.map(({ text, sender }, index) => (
    <Message text={text} sender={sender} key={index} />
  ));
  return (
    <div className="layout">
      <div className="message-field">{messageElement}</div>
    </div>
  );
};
