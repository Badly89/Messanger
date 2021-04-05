import React, { useState } from "react";
import { AUTHORS } from "../utils/constant";
import { TextField, Fab } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

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
        style={{ fontSize: "16px" }}
      />
      <Fab type="submit" size="small" color="primary">
        <SendRoundedIcon />
      </Fab>
    </form>
  );
};
