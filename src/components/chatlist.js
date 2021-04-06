import React from "react";
import { InputChat } from "./inputchat";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

export const ChatList = ({ rooms, onAddRoom }) => {
  const classes = useStyles();
  console.log(rooms);
  return (
    <>
      <div className="list-chat">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {rooms.map(({ roomId, name }) => (
            <ListItem key={roomId} button>
              <ListItemIcon>
                <Link to={`/chats/${roomId}`}>
                  <ListItemText primary={name} />
                </Link>
                <SendIcon className={classes.nested} />
              </ListItemIcon>
            </ListItem>
          ))}
          <ListItem>
            <InputChat room={room} onAddRoom={onAddRoom} />
          </ListItem>
        </List>
      </div>
    </>
  );
};
