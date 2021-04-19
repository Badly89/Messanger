import { DEL_MESSAGE, SEND_MESSAGE } from "./types";
import { AUTHORS } from "../../utils/constant";

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: { message, chatId },
});

export const delMessage = (chatId, message) => ({
  type: DEL_MESSAGE,
  payload: { message, chatId },
});

export const actionMessage = (chatId, message) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(sendMessage(chatId, message));

    if (chatId !== null) {
      const res = await fetch(
        `https://www.botlibre.com/rest/api/form-chat?instance=165&message="${message.text}"&application=428262090517998158`
      );

      const response = await res.text();
      const answer = response.substring(
        response.lastIndexOf("<message>") + 9,
        response.lastIndexOf("</message>")
      );

      const messLength = getState().messages.messages[chatId]?.length;

      dispatch(
        sendMessage(chatId, {
          text: answer,
          sender: AUTHORS.BOT,
          id: `${chatId}-${messLength + 1}`,
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const actionDelMessage = (chatId, message) => async (
  dispatch,
  getState
) => {
  let arr = getState().messages.messages[chatId];
  let arr2 = Object.keys(arr).filter((item) => item.id !== message.id);
  console.log(arr2); //получили id сообщений в комната, но не сам ID из объекта
  console.log(arr); //массив объектов
  // console.log(message);
  dispatch(delMessage(chatId, arr));
  console.log("update");
};
