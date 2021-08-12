import { cardConstants } from '../constants';

const initialState = {
    data : []
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cardConstants.ADD_TO_CART:
            return { 
                ...state,
                data: [ ...state.data, action.payload] 
            };
        case cardConstants.REMOVE_FROM_CART:
            return {
                ...state,
                data: action.payload 
            }; 
        default:
            return state;
    }
}  