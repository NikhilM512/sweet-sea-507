import { Box } from "@chakra-ui/react"
import styles from "./Registration.module.css"
import React from "react";
import { RegisterContext } from "../Contexts/RegistrationContext/RegisterContextProvider";
import { Register } from "../Contexts/RegistrationContext/RegistrationAction";
import { Navigate } from "react-router-dom";

export const Registration =()=>{

    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [registration,setRegistration]=React.useState(false);
    const {dispatch,state}=React.useContext(RegisterContext);

    const handleRegistration=()=>{
        dispatch(Register(email,password))
        alert("Registration Successful!");
        setRegistration(true)
    }

console.log(state);

if(registration){
    return <Navigate to="/sign-in"></Navigate>
}

    return (
        <Box h='auto'>
         <div id={styles.navbar}></div>
    <div id={styles.header}>
      <h1>Create your account</h1>
      <p>Sign up to access Google Digital Garage free online courses</p>
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
      <input type="text" placeholder="Email" id={styles.email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Choose a Password" id={styles.password} onChange={(e)=>setPassword(e.target.value)}  />
      <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>
    </div>
    <div id={styles.continue}>
      <p>Already have an account? <a href="signin.html"> Sign in.</a></p>
      <button id={styles.btn} onClick={()=>handleRegistration()}>Continue</button>
    </div>
    <div id={styles.footer}></div>
        </Box>
    )
}