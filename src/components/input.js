import React, { useState } from "react";
import { AUTHOR } from "../utils/constant";

export const Input = ({ onSendMessage }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({text: value, sender: AUTHOR.HUMAN});
    setValue('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit"> Отправить </input>
    </form>

  );
};
