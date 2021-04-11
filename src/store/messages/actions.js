import { SEND_MESSAGE } from "./types";
import { AUTHORS } from "../../utils/constant";
export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: { message, chatId },
});

export const sendMessageWithTimeout = (chatId, botMessage) => (
  dispatch,
  getState
) => {
  const state = getState();
  const messages = state.messages.messages;
  const lastMessages = messages[chatId]?.[messages[chatId]?.length - 1];

  if (lastMessages?.sender == AUTHORS.HUMAN) {
    setTimeout(() => {
      dispatch(sendMessage(chatId, botMessage));
    }, 2000);
  }
};
