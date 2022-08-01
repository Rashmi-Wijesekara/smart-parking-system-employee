import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    loginDetails: {
        email:"",
        id:"",
        name:"",
        phoneNo:"",
        vehicleList: ""
    },
    loginDetailsChange: () => {},
    login: () => {},
    logout: () => {}
});