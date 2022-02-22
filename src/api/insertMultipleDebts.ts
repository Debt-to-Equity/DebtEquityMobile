import axios from 'axios'
import { URL } from '../config/url'

export const insertMultipleDebts = async (debts: any[], userId: string,) => {
    let res = await axios.post(`${URL}/debt/${userId}`, { debts })

    return res.data
}