
export const Register=(e,p)=>{
     return (
            {
                type:'REGISTRATION',
                payload:{"email":e,"password":p}
            }
     )
}