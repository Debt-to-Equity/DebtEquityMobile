import axios from "axios";
import { URL } from "../config/url";

export const getUserRevenue = async (userId: string) => {
  let res = await axios.get(`${URL}/user/revenue/${userId}`);
  return res.data;
};
