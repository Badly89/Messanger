import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addRoom, delChat } from "../store/chats/actions";

import { chatSelect } from "../store/chats/selectors";
import { Form, ListGroup, Button } from "react-bootstrap";
import { selectMessages } from "../store/messages/selectors";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const rooms = useSelector(chatSelect);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // console.log(selRoom);

  // const selRoom = Object.values(messages.map((item) => item.id == rooms.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRoom(value));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(delChat(id));
  };

  return (
    <>
      <div className="left-side">
        {rooms.length === 0 ? (
          <>
            <p>Создайте комнату</p>
            <Redirect to="/chats" />
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  value={value}
                  onChange={handleChange}
                  style={{ fontSize: "16px" }}
                ></Form.Control>

                <Button type="submit" size="sm">
                  Создать
                </Button>
              </Form>
            </div>
          </>
        ) : (
          <>
            <ListGroup className="flex-column">
              {rooms.map(({ id, name }) => (
                <ListGroup.Item key={id} variant="primary">
                  <Link to={`/chats/${id}`} className="text-decoration-none">
                    {name}
                  </Link>

                  <div className="btn-del">
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDelete(id)}
                    >
                      удалить
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  value={value}
                  onChange={handleChange}
                  style={{ fontSize: "16px" }}
                ></Form.Control>

                <Button type="submit" size="sm">
                  Создать
                </Button>
              </Form>
            </div>
          </>
        )}
      </div>
    </>
  );
};
