import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { changeName } from "../store/profile/actions";

export const Profile = (props) => {
  const [value, setValue] = useState("");
  // const profile = useSelector((state) => state.profile);

  // const dispatch = useDispatch();
  // console.log(props);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    // dispatch(changeName(value));
    props.setNewName(value);
    setValue("");
  };
  return (
    <>
      <h3>Profile, {props.name}</h3>
      <h4>{props.name}</h4>
      <input type="text" onChange={handleChange} value={value} />

      <button onClick={handleClick}>Click</button>
    </>
  );
};
const mapStateToProps = (state) => ({
  name: state.profile.name,
});

const mapDispatchToProps = {
  setNewName: changeName,
};

export const ConnectProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
