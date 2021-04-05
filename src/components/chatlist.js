import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const chats = [
  {
    id: "id1",
    name: "Комната №1",
  },
  {
    id: "id2",
    name: "Комната №2",
  },
  {
    id: "id3",
    name: "Комната №3",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const ChatList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className="list-chat">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {chats.map((chat) => (
          <ListItem key={chat.id} button>
            <ListItemIcon>
              <Link to={`/chats/${chat.id}`}>
                <ListItemText primary={chat.name} />
              </Link>
              <SendIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
