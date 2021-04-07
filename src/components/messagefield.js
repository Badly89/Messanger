import React, { useEffect } from "react";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import "../styles/style.css";
import { useSelector } from "react-redux";

export const MessageField = ({ onSendMessage }) => {
  const msg = useSelector((state) => state.messages);
  console.log(msg.messages);
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
