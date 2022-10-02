

export const reducer=(state,action)=>{
    switch(action.type){
        case "Clicked":
            return({...action.payload})
         default:
            return state
    }
}