import React from "react";

import AppLogo from "../../shared/components/AppLogo";
import FormCard from "../../shared/components/FormCard";
import ImageArea from "../../shared/components/ImageArea";
import Button from "../../shared/Form/Components/Button";
import Input from "../../shared/Form/Components/Input";

/*
    this is a login page
*/

import LogImg from "../../shared/images/Employee.png";

const Login = () => {
    return (
        // login page wrapper
        <div className="text-center w-full">
            <div className="absolute right-1 top-1">
                <AppLogo />
            </div>
            <div>
                <ImageArea src={LogImg} alt="Login Images" className="h-40 mx-auto" />
                <h2 className="text-xl font-semibold mb-1 mt-5">Employee Login</h2>
                <h4 className="font-semibold mb-4">Smart Parking System</h4>
                <FormCard>
                    <form>
                        <Input
                            id="email"
                            type="email" 
                            displayName="Email address"
                        />
                        <Input
                            id="password"
                            type="password" 
                            displayName="Password"
                        />
                        <p className="text-right text-dusty-gray text-xs mb-1">forgot password?</p>
                        <Button 
                            type="submit"
                            title="Login"
                        />
                    </form>
                </FormCard>
            </div>
        </div>
    );
};

export default Login;