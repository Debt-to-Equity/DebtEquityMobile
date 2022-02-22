import axios from 'axios'
import { URL } from '../config/url'

export const insertBudget = async (budget: any[], userId: string) => {
    let res = await axios.post(`${URL}/budget/${userId}`, { budget })
    return res.data
};