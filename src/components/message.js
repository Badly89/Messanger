import React from "react";
import { Button } from "react-bootstrap";

export const Message = ({ message, onDelMessage }) => {
  const handleDelete = () => {
    onDelMessage(message);
  };
  return (
    <>
      <div>{message.text}</div>
      <div className="message-sender ">
        {message.sender}
        <div className="btn-del">
          <Button
            aria-label="delete"
            size="sm"
            id={message.id}
            variant="outline-danger"
            onClick={handleDelete}
            className="btn-del"
          >
            удалить
          </Button>
        </div>
      </div>
    </>
  );
};
