import { ADD_ROOM } from "./types";

const initialRoom = {
  rooms: [{ id: "id1", name: "Комната №0" }],
};

export const chatsReducer = (state = initialRoom, action) => {
  console.log(state.rooms.length);
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

    default:
      return state;
  }
};
