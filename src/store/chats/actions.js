import { Redirect } from "react-router";
import { ADD_ROOM, DEL_ROOM } from "./types";

export const addRoom = (newRoom) => ({
  type: ADD_ROOM,
  payload: newRoom,
});

export const delRoom = (id) => ({
  type: DEL_ROOM,
  payload: id,
});

// export const actionChatList = id;
export const delChat = (room) => async (dispatch, getState) => {
  const arr = getState().messages.messages;
  console.log(arr);
  console.log(room);
  dispatch(delRoom(room));

  console.log("DEL ROOM");
};
