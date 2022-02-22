import axios from 'axios'
import { URL } from '../config/url'

export const insertMultipleRevenue = async (revenue: any[], userId: string) => {
    let res = await axios.post(`${URL}/revenue/${userId}`, { revenue })
    console.log(res)
    return res.data
};