import axios from "./axios";
const loginUrl = import.meta.env.VITE_FETCH_LOGIN
const verifyUrl = import.meta.env.VITE_FETCH_VERIFY;


export const verify = (token) => axios.get(verifyUrl, token)
export const login = (user) => axios.post(loginUrl, user)
