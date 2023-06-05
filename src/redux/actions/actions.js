import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
    return {
      type: REMOVE_FAV,
      payload: id,
    };
  }

  export function filterCards(gender) {
    return {
      type: FILTER,
      payload: gender,
    };
  }

  export function orderCards(payload) {
    return {
      type: ORDER,
      payload
    };
  }