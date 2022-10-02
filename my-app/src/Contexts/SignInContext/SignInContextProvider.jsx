import React from "react";
import { reducer } from "./SignInReducer";

export const SignInContext=React.createContext();

export const SignInContextProvider=({children})=>{

const [state,dispatch]= React.useReducer(reducer,false);
const[isAuth,setIsAuth] =React.useState(false);

    return(
        <SignInContext.Provider value={{state,dispatch,isAuth,setIsAuth}}>
            {children}
        </SignInContext.Provider>
    )
}