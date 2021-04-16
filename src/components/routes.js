import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App, ConnectApp } from "./app";
import { Header } from "./header";
import { ChatList } from "./chatlist";
import { ConnectProfile, Profile } from "./profile";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UsersInfo } from "./usersinfo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "mediumaquamarine",
  },
}));
export const Routes = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <List className={classes.root}>
        <ListItem>
          <Link to="/chats">Комнаты чата</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Информация о пользователях</Link>
        </ListItem>
      </List>

      <Switch>
        <Route exact path="/chats">
          <ChatList />
        </Route>
        <Route path="/chats/:chatId">
          <App />
        </Route>
        <Route path="/profile">
          {/* <Profile /> */}
          <ConnectProfile />
        </Route>
        <Route path="/users">
          <UsersInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
