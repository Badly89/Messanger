import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Header } from "./header";
import { ChatList } from "./chatlist";
import { Profile } from "./profile";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      </List>
      <Switch>
        <Route exact path="/chats">
          <ChatList />
        </Route>
        <Route path="/chats/:chatId" component={App} />
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
