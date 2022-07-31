import React from "react";
import { useHistory } from "react-router-dom";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageArea from "../../shared/components/ImageArea";
import FormCard from "../../shared/components/FormCard";
import Input from "../../shared/Form/Components/Input";
import Button from "../../shared/Form/Components/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL } from "../../shared/util/validators";

import PwdImg from "../../shared/images/PwdReset.svg";

const PasswordReset1 = () => {

    let history = useHistory();
    
    const [inputState, inputHandler] = useForm({
        email: {
            value: "",
            isValid: false
        }
    }, false);

    const pwdResetHandler = event => {
        event.preventDefault();
        console.log("Email validataion.......");
        history.push("/pwdReset2");
    
    }

    return (
        <PageWrapper
        selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={PwdImg} alt="background-image" className="mx-auto h-32 " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Please enter your valid email address</div>
                <form onSubmit={pwdResetHandler}>
                    <Input
                        id="email"
                        type="email" 
                        displayName="Email address"
                        color="bg-alto"
                        inputClass="rounded-lg"
                        errorText="Pleace Enter Valid Email"
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                    />
                    <Button 
                        type="submit"
                        title="Enter"
                        className="mt-6 rounded-lg"
                        isDisabled={!inputState.isValid}
                    />
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default PasswordReset1;