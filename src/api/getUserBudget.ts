import axios from "axios";
import { URL } from "../config/url";

export const getUserBudget = async (userId: string) => {
  let res = await axios.get(`${URL}/budget/${userId}`);
  return res.data;
};
