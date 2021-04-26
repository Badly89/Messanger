import { ADD_ROOM, DEL_ROOM } from "./types";

export const addRoom = (newRoom) => ({
  type: ADD_ROOM,
  payload: newRoom,
});

export const delRoom = (id) => ({
  type: DEL_ROOM,
  payload: id,
});
