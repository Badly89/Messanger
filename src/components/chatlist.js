import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";

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

export const ChatList = () => {
  return (
    <div className="list-chat">
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
