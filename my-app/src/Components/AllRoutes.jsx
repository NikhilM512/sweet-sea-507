  import {Routes,Route} from "react-router-dom"
  import {Home} from "../Pages/Home"
  import {Registration} from "../Pages/Registration"
import { SignIn } from "../Pages/SignIn"

  export const AllRoutes=()=>{
    return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
      </Routes>
    )
    

  }