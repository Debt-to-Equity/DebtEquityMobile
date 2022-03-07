import axios from 'axios'
import { URL } from '../config/url'

export const updatePassword = async (email: string, phoneNumber: string, password: string, token: string) => {
    let res = await axios.post(`${URL}/password`, { email, password, token, phoneNumber });

    return res.data;
};