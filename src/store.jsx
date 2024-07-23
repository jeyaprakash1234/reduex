import { configureStore, createSlice } from '@reduxjs/toolkit';
import products from './products.json';

const initialState = products.products.map(product => ({ ...product, quantity: 1 }));

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const item = state.find(product => product.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(product => product.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        removeItem: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        }
    }
});

export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export const store = configureStore({ reducer: cartSlice.reducer });
