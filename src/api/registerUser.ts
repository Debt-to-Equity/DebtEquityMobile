import axios from "axios";
import { URL } from "../config/url";

export const registerUser = async (
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  userId: string
) => {
  let res = await axios.post(`${URL}/register/${userId}`, {
    email,
    firstName,
    lastName,
    phoneNumber,
  });

  return res.data;
};
