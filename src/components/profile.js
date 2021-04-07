import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/profile/actions";

export const Profile = () => {
  const [value, setValue] = useState("");
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(changeName(value));
    setValue("");
  };
  return (
    <>
      <h3>Profile</h3>
      <h4>{profile.name}</h4>
      <input type="text" onChange={handleChange} value={value} />

      <button onClick={handleClick}>Click</button>
    </>
  );
};
