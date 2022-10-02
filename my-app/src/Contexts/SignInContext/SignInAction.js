// import { RegisterContext } from "../RegistrationContext/RegisterContextProvider";
// import React from "react";


// export const HandleAuth=(e,p)=>{
    
//     const {state:registerData} =React.useContext(RegisterContext)

//     let flag=false;
//     for(let i=0;i<registerData.length;i++){
//      if(registerData[i].email===e && registerData[i].password===p){
//          flag=true;
//          break
//      }
//     }
//     if(flag===false){
//         return({type:"FAIL"})
//     }else{
//         return({type:"PASS"})
//     }
// }