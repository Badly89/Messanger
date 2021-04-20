import { IconButton } from "@material-ui/core";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";

export const Message = ({ message, onDelMessage }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    onDelMessage(message);
  };
  return (
    <>
      <div>{message.text}</div>
      <div className="message-sender">{message.sender}</div>
      <div className="btn-del">
        <IconButton
          aria-label="delete"
          size="small"
          id={message.id}
          onClick={handleDelete}
        >
          {message.id} -
          <HighlightOffIcon />
        </IconButton>
      </div>
    </>
  );
};
