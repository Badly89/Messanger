import React, { useState } from "react";
import { AUTHORS } from "../utils/constant";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";

export const InputText = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({ text: value, sender: AUTHORS.HUMAN });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={value}
        onChange={handleChange}
        style={{ fontSize: "18px" }}
      />
      <FloatingActionButton type="submit">
        <SendIcon />
      </FloatingActionButton>
    </form>
  );
};
