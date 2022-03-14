import axios from "axios";
import { URL } from "../config/url";

export const getUserDebts = async (userId: string) => {
  let res = await axios.get(`${URL}/debt/${userId}`);
  return res.data;
};
