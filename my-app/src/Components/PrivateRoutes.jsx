import {useContext} from "react"
// import {AppContext} from "../Context/AppContext"
import {Navigate} from "react-router-dom"
import { SignInContext } from "../Contexts/SignInContext/SignInContextProvider"


function PrivateRoute({children}) {
       const {isAuth} = useContext(SignInContext)
       if(!isAuth) {
         return <Navigate to="/sign-in"></Navigate>
       }
       return children
}

export default PrivateRoute;