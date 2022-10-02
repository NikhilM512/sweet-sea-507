import { Box } from "@chakra-ui/react"
import styles from "./SignIn.module.css"
import React from "react";
import { RegisterContext } from "../Contexts/RegistrationContext/RegisterContextProvider";
import { Link, Navigate } from "react-router-dom";
import { SignInContext } from "../Contexts/SignInContext/SignInContextProvider";


export const SignIn=()=>{

    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [auth,setAuth]=React.useState(false);
    const [isRegister,setIsRegister]=React.useState(false)
    const {state:registerData} =React.useContext(RegisterContext)
    const {isAuth,setIsAuth} =React.useContext(SignInContext)

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
            setIsAuth(true)
            setAuth(true)
            console.log(auth,isAuth,"hello")
        }else{
            setIsRegister(true)
            alert("Wrong Credentials")
        }
    }

    console.log(auth,registerData,isAuth)

    if(isRegister){
       return <Navigate to="/register"></Navigate>
    }

    if(auth){

        alert("Sign-In Successfull...!")
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

            <input id={styles.email} name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"  />
            <input id={styles.password}  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password"  />
            <div id={styles.login}>
                <p>Forget Password ?</p>
                <button id={styles.btn} onClick={handleSignIn}>Sign in</button>
            </div>
            <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>
            {/* </div> */}
            <div id={styles.continue}>
            <p>Need an account? <Link to="/register"><a href="signup.html"> Sign up here.</a></Link> </p>
             {/* <button id="btn">Continue</button> */}
            </div>
            </div>
            <div id={styles.footer}></div>
        </Box>
    )
}



