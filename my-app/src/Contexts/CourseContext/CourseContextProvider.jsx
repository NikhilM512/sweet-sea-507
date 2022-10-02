import React from "react";
import { reducer } from "./CourseReducer";

export const CourseContext=React.createContext();

export const CourseContextProvider=({children})=>{

    const [state,dispatch]=React.useReducer(reducer,{})
    
    return (
        <CourseContext.Provider value={{state,dispatch}}>
                {children}
        </CourseContext.Provider>
    )
}