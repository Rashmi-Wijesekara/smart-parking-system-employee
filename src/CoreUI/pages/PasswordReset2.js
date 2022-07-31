import React from "react";
import { useHistory } from "react-router-dom";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageArea from "../../shared/components/ImageArea";
import FormCard from "../../shared/components/FormCard";
import Button from "../../shared/Form/Components/Button";
import Input from "../../shared/Form/Components/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH } from "../../shared/util/validators";

import PwdImg from "../../shared/images/mail-img.svg";

const PasswordReset2 = () => {

    let history = useHistory();

    const [inputState, inputHandler] = useForm({
        num1: {
            value: "",
            isValid: false
        },
        num2: {
            value: "",
            isValid: false
        },
        num3: {
            value: "",
            isValid: false
        },
        num4: {
            value: "",
            isValid: false
        }
    }, false);

    const onOTPCodeHandler = event => {
        event.preventDefault();
        console.log("OTP verification");
        history.push("/pwdReset3");
    };

    return (
        <PageWrapper
        selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={PwdImg} alt="background-image" className="mx-auto h-32 " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Please check yor inbox and enter the given verification code</div>
                <form onSubmit={onOTPCodeHandler}>
                    <div className={`text-left mb-2`}>
                        <div className="mb-4">
                            <label 
                                className={`w-full text-dove-gray rounded-lg h-7 px-2 py-3 font-second text-ssx`}
                            >
                                Verfication Code
                            </label>
                        </div>
                        <div className="flex flex-row gap-2 justify-between px-2">
                            <Input 
                                id="num1"
                                type="number" 
                                inputClass="rounded-lg bg-alto"
                                errorText="Enter only one number 0-9"
                                validators={[VALIDATOR_MINLENGTH(1), VALIDATOR_MAXLENGTH(1)]}
                                onInput={inputHandler}
                            />
                            <Input 
                                id="num2"
                                type="number" 
                                inputClass="rounded-lg bg-alto"
                                errorText="Enter only one number 0-9"
                                validators={[VALIDATOR_MINLENGTH(1), VALIDATOR_MAXLENGTH(1)]}
                                onInput={inputHandler}
                            />
                            <Input 
                                id="num3"
                                type="number" 
                                inputClass="rounded-lg bg-alto"
                                errorText="Enter only one number 0-9"
                                validators={[VALIDATOR_MINLENGTH(1), VALIDATOR_MAXLENGTH(1)]}
                                onInput={inputHandler}
                            />
                            <Input 
                                id="num4"
                                type="number" 
                                inputClass="rounded-lg bg-alto"
                                errorText="Enter only one number 0-9"
                                validators={[VALIDATOR_MINLENGTH(1), VALIDATOR_MAXLENGTH(1)]}
                                onInput={inputHandler}
                            />
                        </div>
                        <Button 
                            type="submit"
                            title="Verify"
                            className="mt-6 rounded-lg mx-2 text-center" 
                            isDisabled={!inputState.isValid}
                        />
                    </div>
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default PasswordReset2;