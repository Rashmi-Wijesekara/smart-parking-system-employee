/*
    this is a login page
*/

import React, { useReducer } from "react";

import AppLogo from "../../shared/components/AppLogo";
import FormCard from "../../shared/components/FormCard";
import ImageArea from "../../shared/components/ImageArea";
import Button from "../../shared/Form/Components/Button";
import Input from "../../shared/Form/Components/Input";

import LogImg from "../../shared/images/Employee.png";

const formReduser = (state, action) => {

}

const Login = () => {

    useReducer(formReduser, {
        input: {
            email: {
                value: "",
                isValid: false
            },
            password: {
                value: "",
                isValid: false
            }
        },
        isValid: false
    });

    return (
        // login page wrapper
        <div className="text-center w-full">
            <div className="absolute right-1 top-1">
                <AppLogo />
            </div>
            <div>
                <ImageArea src={LogImg} alt="Login Images" className="h-40 mx-auto" />
                <h2 className="text-xl font-semibold mb-1 mt-5 font-main">Employee Login</h2>
                <h4 className="font-semibold mb-4 font-main">Smart Parking System</h4>
                <FormCard>
                    <form>
                        <Input
                            id="email"
                            type="email" 
                            displayName="Email address"
                            inputClass="rounded-lg"
                        />
                        <Input
                            id="password"
                            type="password" 
                            displayName="Password"
                            inputClass="rounded-lg"
                        />
                        <p className="text-right text-dusty-gray text-xs mb-1 font-second text-ssx">forgot password?</p>
                        <Button 
                            type="submit"
                            title="Login"
                            className="rounded-lg"
                        />
                    </form>
                </FormCard>
            </div>
        </div>
    );
};

export default Login;