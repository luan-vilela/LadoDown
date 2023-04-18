// import { create } from 'domain';
import { createContext } from 'react';

export type AuthContextType = {
    user;
    signin : (email, password) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext(null!);