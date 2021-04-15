import { List, ListItem, Typography, Card } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/users/actions";

export const UsersInfo = () => {
  const dispantch = useDispatch();
  //   const test = useSelector((state) => state);
  //   console.log(test);
  const infoUsers = useSelector((state) => state.users.list);
  const error = useSelector((state) => state.users.request.error);
  const loading = useSelector((state) => state.users.request.loading);

  const requestUsers = () => {
    dispantch(getUserInfo());
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
      <List className="users-list">
        {infoUsers?.map((info) => (
          <ListItem
            key={info.id}
            alignItems="flex-start"
            className="users-items"
          >
            <Card>
              <Typography color="textSecondary" gutterBottom>
                {info.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {info.username}
              </Typography>
              <Typography variant="body2" component="p">
                {info.email}
              </Typography>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};
