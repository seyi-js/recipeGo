/* eslint-disable prettier/prettier */
import { GET_DATA, LOAD_RECIPES, LOAD_ALL, CHANGE_MODE } from "../action/types";

const initialState = {
  recipes: null,
  DARK_MODE: false,
  //   MODE: DARK_MODE ? "#18191a" : "#fff",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
    case LOAD_ALL:
      return {
        ...state,
        recipes: action.payload,
      };

    case CHANGE_MODE:
      return {
        ...state,
        DARK_MODE: !state.DARK_MODE,
      };
    default:
      return state;
  }
};
