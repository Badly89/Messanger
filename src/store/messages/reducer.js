import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE, SEND_BOT } from "./types";

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

    default:
      return state;
  }
};

// messages: [
//   ...state.messages,
//   {
//     idChat: `idChat${state.messages.length + 1}`,
//     text: action.payload,
//     sender: AUTHORS.HUMAN,
//     id: `id${state.messages.length + 1}`,
//   },
// ],
