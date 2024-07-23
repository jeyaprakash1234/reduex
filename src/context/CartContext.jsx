// import React, { createContext, useContext, useReducer } from 'react';
// import products from '../products.json'

// const CartContext = createContext();

// const initialState = products.products.map(product => ({ ...product, quantity: 1 }));

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREASE_QUANTITY':
//             return state.map(item =>
//                 item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//         case 'DECREASE_QUANTITY':
//             return state.map(item =>
//                 item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
//             );
//         case 'REMOVE_ITEM':
//             return state.filter(item => item.id !== action.id);
//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, initialState);

//     return (
//         <CartContext.Provider value={{ cart, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);
