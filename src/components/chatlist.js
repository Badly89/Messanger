import React, { useState, useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
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
import { addRoom, delChat, delRoom } from "../store/chats/actions";
// import  from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { chatSelect } from "../store/chats/selectors";
import { actionDelMessage } from "../store/messages/actions";

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

  const rooms = useSelector(chatSelect);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(addRoom(value));
    setValue("");
  };
  // const handleDelete = (e) => {
  //   dispatch(delChat(e.target.id));
  // };

  const handleDelete = (id) => {
    dispatch(delChat(id));
  };

  return (
    <>
      <aside className="list-chat">
        <div>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            {rooms.map(({ id, name }) => (
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
                    onClick={() => handleDelete(id)}
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
            </ListItem>
          </List>
        </div>
      </aside>
    </>
  );
};
