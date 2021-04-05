import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Месенджер на ReactJS</h1>
        <Link to="/profile">
          <AccountCircleIcon fontSize="large" />
          <Typography variant="srOnly">Профиль пользователя</Typography>
        </Link>
      </div>
    </>
  );
};
