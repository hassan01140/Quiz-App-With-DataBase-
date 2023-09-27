import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Task from "../Screens/Task";
import Admin from "../Screens/admin";
export default function AppRouter(){
    return(
        <>
        <Router>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Router>
        </>
    )
}
