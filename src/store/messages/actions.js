import { SEND_MESSAGE } from "./types";

export const sendMessage = (newMessage) => ({
  type: SEND_MESSAGE,
  payload: newMessage,
});
