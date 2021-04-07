import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE } from "./types";

const initialMessage = {
  messages: [{ text: "Добро пожаловать в чат", sender: AUTHORS.BOT, id: "id" }],
};

export const msgReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        message: [
          ...state.message,
          {
            text: action.payload,
            sender: AUTHORS.HUMAN,
            id: `id${state.message.length + 1}`,
          },
        ],
      };
    }

    default:
      return state;
  }
};
