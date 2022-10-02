import React from "react";
import { reducer } from "./RegistrationReducer";

export const RegisterContext=React.createContext();

export const RegisterContextProvider=({children})=>{

    const [state,dispatch]=React.useReducer(reducer,[])
    
    return (
        <RegisterContext.Provider value={{state,dispatch}}>
                {children}
        </RegisterContext.Provider>
    )
}