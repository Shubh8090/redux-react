// cartActions.js
import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';

export const increaseQuantityAction = (itemId) => ({
  type: INCREASE_QUANTITY,
  payload: itemId,
});

export const decreaseQuantityAction = (itemId) => ({
  type: DECREASE_QUANTITY,
  payload: itemId,
});