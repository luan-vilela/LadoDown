// import { constants } from "buffer";
import { useEffect, useState } from "react";
import { useApi } from "../../services/Api";
import { AuthContext } from "./AuthContext";
import jwt_decode from "jwt-decode";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = sessionStorage.getItem("authToken");
      const storageDataUser = sessionStorage.getItem("user");

      if (storageData !== "") {
        setUser(JSON.parse(storageDataUser));
      }
      // if (storageData) {
      //     const data = await api.validateToken(storageData);
      //     if(data.user) {
      //         setUser(data.user);
      //     }
      // }
    };
    validateToken();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      let user = data.user;
      user.permissions = data.permissions;
      user.email = email;
      setUser(user);
      sessionStorage.setItem("authToken", "Bearer ".concat(data.token));
      sessionStorage.setItem("user", JSON.stringify(user));
      return true;
    }

    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    sessionStorage.getItem("authToken");
    sessionStorage.getItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
