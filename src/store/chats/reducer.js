import { ADD_ROOM, DEL_ROOM } from "./types";

const initialRoom = {
  rooms: [{ id: "id0", name: "Общая комната" }],
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
      const item = { ...state.rooms };
      // const item = state.rooms.filter(({ id }) => id === action.payload.id);
      console.log(item);
      // console.log(action.payload);
      return {
        ...state,
        rooms: state.rooms.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
