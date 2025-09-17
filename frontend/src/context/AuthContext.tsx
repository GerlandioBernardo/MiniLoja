import {createContext, useState, useEffect} from "react";
import type {ReactNode} from "react";
import type { TypeAuthContext, User } from "../types/TypeUser";

const AuthContext = createContext<TypeAuthContext | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if(storedUser && storedToken){
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        };
    }, []);

    function signup(user: User, token: string){

        setUser(user);
        setToken(token);

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

    };

    function login(user: User, token: string){

        setUser(user);
        setToken(token);

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

    };

    function logout(){
        setUser(null);
        setToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    
  return (
    <AuthContext.Provider  value={{user, token, login, logout, signup}}>
      {children}
    </AuthContext.Provider>
  );

}
export {AuthContext};
