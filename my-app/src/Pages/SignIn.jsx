import { Box } from "@chakra-ui/react"
import styles from "./SignIn.module.css"


export const SignIn=()=>{
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
            <input type="text" placeholder="Email" id={styles.email} />
            <input type="password" placeholder="Password" id={styles.password} />
            <div id={styles.login}>
                <p>Forget Password ?</p>
                <button id={styles.btn}>Sign in</button>
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