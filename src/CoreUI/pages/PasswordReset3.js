import React from "react";
import { useHistory } from "react-router-dom";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageArea from "../../shared/components/ImageArea";
import FormCard from "../../shared/components/FormCard";
import Input from "../../shared/Form/Components/Input";
import Button from "../../shared/Form/Components/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_EQUAL } from "../../shared/util/validators";

import PwdImg from "../../shared/images/pwdReset2.svg";

const PasswordReset3 = () => {

    let history = useHistory();

    const pwdHandler = event => {
        event.preventDefault();
        console.log("compare pwd and change");
        history.push("/profileInfo");
        
    };

    const [inputState, inputHandler] = useForm({
        password: {
            value: "",
            isValid: false
        },
        cpassword: {
            value: "",
            isValid: false
        }
    }, false);

    return (
        <PageWrapper
            selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={PwdImg} alt="background-image" className="mx-auto h-32 " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Please enter your new password</div>
                <form onSubmit={pwdHandler}>
                    <Input
                        id="password"
                        type="password" 
                        displayName="Password"
                        inputClass="rounded-lg"
                        errorText="Password should have at least 6 charactors"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        onInput={inputHandler}
                    />
                    <Input
                        id="cpassword"
                        type="password" 
                        displayName="Confirm Password"
                        inputClass="rounded-lg"
                        errorText="Password should be same"
                        validators={[VALIDATOR_EQUAL(inputState.inputs.password.value)]}
                        onInput={inputHandler}
                    />
                    
                    <Button 
                        type="submit"
                        title="Reset Password"
                        className="rounded-lg mt-4 mx-2"
                        isDisabled={!inputState.isValid}
                    />
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default PasswordReset3;