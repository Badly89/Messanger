import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Header } from "./header";
import { ChatList } from "./chatlist";
import { ConnectProfile } from "./profile";
import Container from "react-bootstrap/Container";

import { UsersInfo } from "./usersinfo";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Switch>
          <Route exact path="/chats">
            <ChatList />
          </Route>
          <Route path="/chats/:chatId">
            <App />
          </Route>
          <Route path="/profile">
            <ConnectProfile />
          </Route>
          <Route path="/users">
            <UsersInfo />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
