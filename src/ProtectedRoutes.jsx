import { Outlet } from "react-router-dom";
import SignIn from "./Pages/SignIn";

const useAuth = () => {
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
return(
   isAuth ? <Outlet/>: <SignIn/>   )
}

export default ProtectedRoutes;