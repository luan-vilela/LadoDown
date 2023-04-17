import { useContext } from "react";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({children}: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <SignIn />
    }
    return children;
}