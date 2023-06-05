import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/types";

const initialState = {
  data: [],
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter((ch) => ch.id !== payload);
      return {
        ...state,
        myFavorites: newFavorites,
      };
    case FILTER:
      const filtered = state.allCharacters.filter(
        (ch) => ch.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filtered,
      };
    case ORDER:
      const orderChar = state.myFavorites.sort((x, y) => {
        if (payload === "A") {
          return x.id - y.id;
        } else {
          return y.id - x.id;
        }
      });
      return {
        ...state,
        myFavorites: [...orderChar],
      };

    default:
      return state;
  }
}
