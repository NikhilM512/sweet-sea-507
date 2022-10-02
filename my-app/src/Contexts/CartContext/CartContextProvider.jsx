import React from "react";
import { reducer } from "./CartReducer";

export const CartContext=React.createContext();

export const CartContextProvider=({children})=>{

    const [state,dispatch]=React.useReducer(reducer,[])
    
    return (
        <CartContext.Provider value={{state,dispatch}}>
                {children}
        </CartContext.Provider>
    )
}