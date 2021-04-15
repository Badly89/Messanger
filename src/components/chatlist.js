import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { Button, IconButton } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useDispatch, useSelector } from "react-redux";
import { addRoom, delRoom } from "../store/chats/actions";
// import  from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

export const ChatList = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(addRoom(value));
    setValue("");
  };
  const handleDelete = (id) => {
    dispatch(delRoom(id));
  };

  return (
    <>
      <div className="list-chat">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {chats.rooms.map(({ id, name }) => (
            <ListItem key={id} button>
              <ListItemIcon>
                <Link to={`/chats/${id}`}>
                  <ListItemText primary={name} />
                </Link>
                <SendIcon className={classes.nested} />
              </ListItemIcon>
              <div className="btn-del">
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={handleDelete}
                >
                  <HighlightOffIcon />
                </IconButton>
              </div>
            </ListItem>
          ))}
          <ListItem>
            <TextField
              type="text"
              value={value}
              onChange={handleChange}
              style={{ fontSize: "16px" }}
            />
            <Button
              onClick={handleClick}
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              endIcon={<SendRoundedIcon />}
            ></Button>
            {/* <Fab onClick={handleClick} size="small" color="primary">
              <SendIcon />
            </Fab> */}
          </ListItem>
        </List>
      </div>
    </>
  );
};
