/*
    this is a login page
*/

import React, { useContext, useState } from "react";

import AppLogo from "../../shared/components/AppLogo";
import FormCard from "../../shared/components/FormCard";
import ImageArea from "../../shared/components/ImageArea";
import Button from "../../shared/Form/Components/Button";
import Input from "../../shared/Form/Components/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import LogImg from "../../shared/images/Employee.png";

const Login = () => {

    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const [inputState, inputHandler] = useForm({
        userId: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false);

    const loginHandler = async event => {
        event.preventDefault();
        
        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/api/employee/${inputState.inputs.userId.value}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const responseData = await response.json();
            if(responseData.status === "OK") {
                if (inputState.inputs.password.value === responseData.data[0].password) {
                    await auth.loginDetailsChange(responseData.data[0].email, responseData.data[0].id, responseData.data[0].name, responseData.data[0].phoneNo, responseData.data[0].vehicleList);
                    auth.login();
                } else {
                    console.log("Wrong userName or password");
                }
            } else {
                console.log("Error occoured");
            }
        } catch (err) {
            console.log(err);
        }

        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <div>
                <h1>Looding...</h1>
            </div>
        );
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
                            id="userId"
                            type="text" 
                            displayName="User ID"
                            inputClass="rounded-lg"
                            errorText="Pleace Enter Valid UserName"
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                        />
                        <Input
                            id="password"
                            type="password" 
                            displayName="Password"
                            inputClass="rounded-lg"
                            errorText="Password should have at least 6 charactors"
                            validators={[VALIDATOR_MINLENGTH(4)]}
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