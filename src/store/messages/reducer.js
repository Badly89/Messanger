import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE, SEND_BOT, DEL_MESSAGE } from "./types";

const initialMessage = {
  messages: {},
};

export const msgReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] || []),
            action.payload.message,
          ],
        },
      };
    }
    case DEL_MESSAGE: {
      console.log("удалил");
      return {};
    }
    default:
      return state;
  }
};
