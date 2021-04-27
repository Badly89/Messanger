// import { List, ListItem, Typography, Card } from "@material-ui/core";
import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/users/actions";

export const UsersInfo = () => {
  const dispatch = useDispatch();
  //   const test = useSelector((state) => state);
  //   console.log(test);
  const infoUsers = useSelector((state) => state.users.list);
  const error = useSelector((state) => state.users.request.error);
  const loading = useSelector((state) => state.users.request.loading);

  const requestUsers = () => {
    dispatch(getUserInfo());
  };
  useEffect(() => {
    requestUsers();
  }, []);
  if (loading) {
    return <h2>Data is loading...</h2>;
  }
  if (error) {
    return (
      <>
        <h3>Ошибка загрузки данных. Повторите позже или нажмите кнопку</h3>
        <button onClick={requestNasa}>Обновить</button>
      </>
    );
  }
  return (
    <>
      <ListGroup className="users-list">
        {infoUsers?.map((info) => (
          <ListGroupItem
            key={info.id}
            alignItems="flex-start"
            className="users-items"
          >
            <Card>
              <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Subtitle> {info.username}</Card.Subtitle>
                <Card.Subtitle> {info.email}</Card.Subtitle>
              </Card.Body>
            </Card>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};
