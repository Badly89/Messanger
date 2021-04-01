import React, { useEffect, useCallback, useState } from "react";
import { MessageField } from "./messageField";
import { AUTHORS } from "../utils/constant";
import { InputText } from "./input";

const messagesBot = [
  { text: "Привет!", sender: AUTHORS.BOT },
  { text: "Как дела?", sender: AUTHORS.BOT },
];
export const App = () => {
  const [messages, setMessages] = useState(messagesBot);
  const sendMessage = useCallback((newMessage) => {
    setMessages((prevMess) => [...prevMess, newMessage]);
  }, []);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timeout;
    if (lastMessages?.sender !== AUTHORS.BOT) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "Не приставай ко мне, я робот!",
          sender: AUTHORS.BOT,
        });
      }, 1000);
    }
  }, [messages]);

  return (
    <>
      <MessageField messages={messages} />
      <InputText onSendMessage={sendMessage} />
    </>
  );
};

/*сдача ДЗ */
