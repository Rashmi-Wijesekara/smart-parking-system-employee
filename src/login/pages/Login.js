/*
    this is a login page
*/

import React, { useContext } from "react";

import AppLogo from "../../shared/components/AppLogo";
import FormCard from "../../shared/components/FormCard";
import ImageArea from "../../shared/components/ImageArea";
import Button from "../../shared/Form/Components/Button";
import Input from "../../shared/Form/Components/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import LogImg from "../../shared/images/Employee.png";

const Login = () => {

    const auth = useContext(AuthContext);

    const [inputState, inputHandler] = useForm({
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false);

    const loginHandler = event => {
        event.preventDefault();
        auth.login();
        console.log(auth.isLoggedIn);
    }

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
                <FormCard className="rounded-lg mt-10 w-full">
                    <form onSubmit={loginHandler}>
                        <Input
                            id="email"
                            type="email" 
                            displayName="Email address"
                            inputClass="rounded-lg"
                            errorText="Pleace Enter Valid Email"
                            validators={[VALIDATOR_EMAIL()]}
                            onInput={inputHandler}
                        />
                        <Input
                            id="password"
                            type="password" 
                            displayName="Password"
                            inputClass="rounded-lg"
                            errorText="Password should have at least 6 charactors"
                            validators={[VALIDATOR_MINLENGTH(6)]}
                            onInput={inputHandler}
                        />
                        <p className="text-right text-dusty-gray text-xs mb-1 font-second text-ssx">forgot password?</p>
                        <Button 
                            type="submit"
                            title="Login"
                            className="rounded-lg"
                            isDisabled={!inputState.isValid}
                        />
                    </form>
                </FormCard>
            </div>
        </div>
    );
};

export default Login;