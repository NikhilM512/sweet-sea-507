// import { Action } from "@remix-run/router";


export const reducer=(state,action)=>{
    switch (action.type){
        case "REGISTRATION":
            return(
                [...state,action.payload]
            )
          default:
            return state;
    }
}