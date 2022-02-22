import axios from 'axios'
import { URL } from '../config/url'

export const getPayoffSchedule = async (userId: string) => {
    let res = await axios.get(`${URL}/payoff/${userId}`)
    return res.data
};