import { Box } from "@chakra-ui/react"
import styles from "./SignIn.module.css"
import React from "react";
import { RegisterContext } from "../Contexts/RegistrationContext/RegisterContextProvider";
import { Navigate } from "react-router-dom";


export const SignIn=()=>{

    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [auth,setAuth]=React.useState(false)
    const {state:registerData} =React.useContext(RegisterContext)

    const handleSignIn=()=>{
    // console.log("Hello")
    let flag=false;
        for(let i=0;i<registerData.length;i++){
        if(registerData[i].email===email && registerData[i].password===password){
            flag=true;
            break
        }
        }
        if(flag===true){
            setAuth(true)
        }
    }

    console.log(auth,registerData)

    if(auth){
        return <Navigate to="/"></Navigate>
    }
    
    return (
        <Box>
            <div id={styles.navbar}></div>
            <div id={styles.header}>
            <h1>Sign in</h1>
            <p>Access your online courses and track your progress</p>
            </div>
            <div id={styles.register}>
            <div id={styles.googleImg}>
                <img
                src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/google-button-g.png"
                alt="google"
                />
                <p>Register with Google</p>
            </div>
            <h3>Or continue with email</h3>
            <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" id={styles.email} />
            <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" id={styles.password} />
            <div id={styles.login}>
                <p>Forget Password ?</p>
                <button id={styles.btn} onClick={handleSignIn}>Sign in</button>
            </div>
            <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div id={styles.continue}>
            <p>Need an account? <a href="signup.html"> Sign up here.</a></p>
             {/* <button id="btn">Continue</button> */}
            </div>
            <div id={styles.footer}></div>
        </Box>
    )
}