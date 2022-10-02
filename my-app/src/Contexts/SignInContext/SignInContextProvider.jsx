import React from "react";
import { reducer } from "./SignInReducer";

export const SignInContext=React.createContext();

export const SignInContextProvider=({children})=>{

const [state,dispatch]= React.useReducer(reducer,false);

    return(
        <SignInContext.Provider value={{state,dispatch}}>
            {children}
        </SignInContext.Provider>
    )
}