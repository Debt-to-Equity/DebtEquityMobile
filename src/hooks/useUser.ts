import { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../types";
import { loginUser } from "../api/loginUser";

export const useUser = () => {
  const [user, setUser] = useState<IUser>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    loggedIn: false,
    userType: "",
    parentId: ""
  });

  useEffect(() => {
    getUser();
  }, []);

  const saveUser = async (newUser: {}) => {
    try {
      const jsonValue = JSON.stringify(newUser);
      await AsyncStorage.setItem("user", jsonValue);
      getUser();
    } catch (e) {
      // saving error
    }
  };

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        loggedIn: false,
        userType: "",
        parentId: ""
      });
    } catch (e) {
      // saving error
    }
  };

  return { user, logoutUser, getUser, saveUser };
};
