import { ContextType, createContext } from "react";

export const UserContext = createContext({
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    loggedIn: false,
    userType: "",
    parentId: "",
  },
  saveUser: ({}) => {},
  logoutUser: () => {},
  getUser: () => {},
});
