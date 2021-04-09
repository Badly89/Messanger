import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE } from "./types";

const initialMessage = {
  messages: [],
};

export const msgReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            idChat: `idChat${state.messages.length + 1}`,
            text: action.payload,
            sender: AUTHORS.HUMAN,
            id: `id${state.messages.length + 1}`,
          },
        ],
      };
    }

    default:
      return state;
  }
};
