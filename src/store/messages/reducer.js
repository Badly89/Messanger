import { useParams } from "react-router";
import { AUTHORS } from "../../utils/constant";
import { SEND_MESSAGE } from "./types";

// const { chatId } = useParams();
const initialMessage = {
  messages: [{ text: "Добро пожаловать в чат", sender: AUTHORS.BOT, id: "id" }],
};

export const messagesReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
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
