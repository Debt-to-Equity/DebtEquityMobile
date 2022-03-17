import axios from "axios";
import { URL } from "../config/url";

export const getClients = async (userId: string) => {
  const res = await axios.get(`${URL}/user/children/${userId}`);

  return res.data;
};
