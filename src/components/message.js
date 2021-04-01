import React from "react";
import { AUTHORS } from "../utils/constant";
import "../styles/style.css";

export const Message = ({ text, sender }) => (
  <div
    className="message"
    style={{ alignSelf: sender == AUTHORS.BOT ? "flex-start" : "flex-end" }}
  >
    <div>{text}</div>

    <div className="message-sender">{sender}</div>
  </div>
);
