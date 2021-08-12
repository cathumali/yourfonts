
import { cardConstants } from '../constants';

export const addItemToCart = ( item ) => dispatch => {
    dispatch({ type:cardConstants.ADD_TO_CART , payload: item });
}

export const removeItemToCart = (item) => dispatch => {
    dispatch({ type:cardConstants.REMOVE_FROM_CART , payload: item })
}
