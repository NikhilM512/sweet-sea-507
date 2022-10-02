
export const reducer=(state,action)=>{
    switch(action.type){
        case "Click":
            return([...state,action.payload])
         default:
            return state
    }
}