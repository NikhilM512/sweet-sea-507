

export const reducer=(state,action)=>{
    console.log(state,action.type)
    switch (action.type){
        case "FAIL":
            return false;
            case "FAIL":
            return true;
            default:
            return state;
    }
}