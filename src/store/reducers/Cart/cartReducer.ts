import IOrderItem from '../../../types/IOrderItem';
import { ActionTypes }  from '../../actions/actionTypes';
import { Action } from '../../actions/Action';

export interface ICartState {
    orderItems: IOrderItem [],
}

var existingInfo =  localStorage.getItem('orderItems');

const initialState = {
    orderItems: existingInfo? JSON.parse(existingInfo) : []
}

export const cartReducer = (state: ICartState = initialState, action: Action) : ICartState => {
    switch(action.type) {
        case ActionTypes.addToCart: {
            var existingItem = state.orderItems.find((item) => item.id === action.payload.id)
            
            if (existingItem) {
                var orderItems = [...state.orderItems];
                var existingItemIndex: number = orderItems.findIndex(item => item.id === action.payload.id);
                var updatedAmount: number = orderItems[existingItemIndex].amount + action.payload.amount;
                orderItems[existingItemIndex].amount = updatedAmount;
                var updatedPrice: number = orderItems[existingItemIndex].unitPrice * orderItems[existingItemIndex].amount;
                orderItems[existingItemIndex].totalPrice = updatedPrice;
            } else {
                    orderItems = [...state.orderItems, action.payload];
            }
            
            localStorage.setItem('orderItems', JSON.stringify(orderItems));
            console.log(localStorage);
            console.log({...state, orderItems: orderItems});
            return {...state, orderItems: orderItems}
        }
        case ActionTypes.updateCart: {
            var orderItems = [...state.orderItems];
            var orderItemIndex: number = orderItems.findIndex(item => item.id === action.payload.id);
            orderItems[orderItemIndex].amount = action.payload.amount;
            orderItems[orderItemIndex].totalPrice = orderItems[orderItemIndex].unitPrice * action.payload.amount;

            localStorage.setItem('orderItems', JSON.stringify(orderItems));
            console.log(localStorage);
            console.log({...state, orderItems: orderItems});
            return {...state, orderItems: orderItems}
        }
        default: 
            return state
    }
};