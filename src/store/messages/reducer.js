import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE, DEL_MESSAGE } from "./types";

const initialMessage = {
  messages: {},
};

// dispatch(delMessage(message));

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
      const index = Object.values(action.payload.message);
      console.log(index);

      return {
        ...state,
        messages: { ...state.messages },
        // [action.payload.chatId]: [
        // ...state.messages[action.payload.chatId].slice(0, index),
        // ...state.messages[action.payload.chatId].slice(index + 1),
        // ],
      };
    }
    default:
      return state;
  }
};
