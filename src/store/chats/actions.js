import { ADD_ROOM } from "./types";

export const addRoom = (newRoom) => ({
  type: ADD_ROOM,
  payload: newRoom,
});
