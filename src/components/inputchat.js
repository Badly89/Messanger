import React, { useState } from "react";
import { useParams } from "react-router";
import { TextField, Fab } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
export const InputChat = ({ rooms, onAddRoom }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rooms);
    onAddRoom({ id: `id${rooms.length + 1}`, name: value });
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
