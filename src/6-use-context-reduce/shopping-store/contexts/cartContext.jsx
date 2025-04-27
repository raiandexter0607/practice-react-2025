import { createContext, useContext, useReducer } from "react";


const cartReducer = (state, action) => {
    if(action.action === 'ADD_ITEM'){
        
        const indexFound = state.findIndex(item => item.id === action.payload.id)
        console.log(state)
        if(indexFound >= 0){
            const updatedCart = [...state]
            updatedCart[indexFound] = {
                ...updatedCart[indexFound],
                qty: updatedCart[indexFound].qty + 1
            }

            return updatedCart
        } else {
            return [ ...state, 
                { 
                    name: action.payload.name, 
                    price: action.payload.price,
                    qty: action.payload.qty,
                    id: action.payload.id
                }
            ]
        }
    }

    return state
}


const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, []);
    const totalPrice = state.reduce((acc, item) => acc + item.price * item.qty, 0);

    return(
        <CartContext.Provider value={{state, dispatch, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)