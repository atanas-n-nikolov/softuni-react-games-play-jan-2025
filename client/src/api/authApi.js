import { useContext, useEffect, useRef } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => 
        request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });

    useEffect(() => {
        const AbortController = abortRef.current;
        
        return () => AbortController.abort();
    }, []);

    return {
        login,
    };
};

export const useRegister = () => {
    const register = async (email, password) => request.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    };
};

export const useLogout = () => {
    const { accesToken } = useContext(UserContext);
    
    const options = {
        headers: {
            'X-Authorization': accesToken
        }
    };


    const logout = () => request.get(`${baseUrl}/logout`, null, options )

    return {
        logout,
    }
    
}