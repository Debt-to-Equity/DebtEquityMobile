import axios from 'axios'
import { URL } from '../config/url'

export const loginUser = async (email: string, password: string) => {
    let res = await axios.post(`${URL}/login`, { email, password });
    return res.data;
}