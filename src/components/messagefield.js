import React, { useCallback, useState } from "react";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";
import "../styles/style.css";

export const MessageField = ({ messages, onSendMessage, onDelMessage }) => {
  // const [value, setValue] = useState(messages);
  console.log(messages);
  const handleDelete = (messages) => {
    onDelMessage(messages);
  };
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
            <div className="btn-del">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleDelete}
              >
                <HighlightOffIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <InputText onSendMessage={onSendMessage} />
    </>
  );
};
