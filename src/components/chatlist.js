import React, { useState, useCallback } from "react";
import { InputChat } from "./inputchat";
import { Link, useParams } from "react-router-dom";
import {
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../store/chats/actions";

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
  const state = useSelector((state) => state.chats);

  // const [rooms, setRoom] = useState(chatList);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //  e.preventDefault();
  //  console.log(rooms);
  //  onAddRoom({ id: `id${rooms.length + 1}`, name: value });
  //  setValue("");
  const handleClick = () => {
    dispatch(addRoom(value));
    setValue("");
  };
  // const addRoom = useCallback((newRoom) => {
  //   setRoom((prevRoom) => [...prevRoom, newRoom]);
  // }, []);
  // console.log(rooms.id);
  return (
    <>
      <div className="list-chat">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {state.rooms.map(({ id, name }) => (
            <ListItem key={id} button>
              <ListItemIcon>
                <Link to={`/chats/${id}`}>
                  <ListItemText primary={name} />
                </Link>
                <SendIcon className={classes.nested} />
              </ListItemIcon>
            </ListItem>
          ))}
          <ListItem>
            <TextField
              type="text"
              value={value}
              onChange={handleChange}
              style={{ fontSize: "16px" }}
            />
            <Fab onClick={handleClick} size="small" color="primary">
              <SendIcon />
            </Fab>
          </ListItem>
        </List>
      </div>
    </>
  );
};
