import {ADD_ITEM, REMOVE_ALL_ITEMS, REMOVE_ITEM} from "../actions/types";
import uuidv4 from 'uuid/v4';

export default function (state=[],action) {
  switch (action.type) {
    case ADD_ITEM:
      return[...state, {...action.item, id:uuidv4()}]
    case REMOVE_ITEM:
      return state.filter((item) =>item.id !== action.id)
    case REMOVE_ALL_ITEMS:
      return []
    default:
      return state;
  }
}