import { Box } from "@chakra-ui/react"
import styles from "./Registration.module.css"

export const Registration =()=>{
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
      <input type="text" placeholder="Email" id={styles.email} />
      <input type="password" placeholder="Choose a Password" id={styles.password} />
      <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>
    </div>
    <div id={styles.continue}>
      <p>Already have an account? <a href="signin.html"> Sign in.</a></p>
      <button id={styles.btn}>Continue</button>
    </div>
    <div id={styles.footer}></div>
        </Box>
    )
}