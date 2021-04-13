import { ADD_ROOM, DEL_ROOM } from "./types";

const initialRoom = {
  rooms: [{ id: "id1", name: "Общая комната" }],
};

export const chatsReducer = (state = initialRoom, action) => {
  switch (action.type) {
    case ADD_ROOM: {
      return {
        ...state,
        rooms: [
          ...state.rooms,
          { name: action.payload, id: `id${state.rooms.length + 1}` },
        ],
      };
    }
    case DEL_ROOM: {
      const item = state.rooms.find(({ id }) => id === action.payload);
      return updateChatList(state, item);
      // return state.rooms.filter((rooms) => rooms.id !== action.id);
    }

    default:
      return state;
  }
};

const updateChatList = (state, id) => {
  const chat = state.rooms.find((chat) => chat.id === id);
  console.log(state);
  console.log(chat);
};
