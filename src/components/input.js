import React, { useEffect, useState } from "react";
import { AUTHORS } from "../utils/constant";
import { TextField, Fab } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/messages/actions";

export const InputText = ({ messages, onSendMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(value);
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
