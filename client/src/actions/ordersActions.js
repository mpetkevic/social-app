import {ADD_ITEM,REMOVE_ITEM, REMOVE_ALL_ITEMS} from "./types";

export function addItemToCart(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function removeItemFromCart(id) {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export function removeAllItems() {
  return {
    type: REMOVE_ALL_ITEMS
  }
}

