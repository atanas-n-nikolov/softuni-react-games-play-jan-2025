import { useEffect, useRef } from "react";
import request from "../utils/request"
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
}