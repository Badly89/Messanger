import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Header } from "./header";
import { ChatList } from "./chatlist";

export const Routes = () => (
  <BrowserRouter>
    <Header />
    <ul>
      <li>
        <Link to="/chats">Комнаты чата</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/chats">
        <ChatList />
      </Route>
      <Route path="/chats/:chatId">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>
);
