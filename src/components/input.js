import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AUTHORS } from "../utils/constant";

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
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        value={value}
        onChange={handleChange}
        style={{ fontSize: "16px" }}
      />
      {/* <Button variant="contained" type="submit" size="small" /> */}
    </Form>
  );
};
