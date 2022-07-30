import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageArea from "../../shared/components/ImageArea";
import FormCard from "../../shared/components/FormCard";
import Input from "../../shared/Form/Components/Input";
import Button from "../../shared/Form/Components/Button";

import PwdImg from "../../shared/images/pwdReset2.svg";

const PasswordReset3 = () => {
    return (
        <PageWrapper
            selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={PwdImg} alt="background-image" className="mx-auto h-32 " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Please enter your new password</div>
                <form>
                    <Input
                        id="password"
                        type="password" 
                        displayName="Password"
                        inputClass="rounded-lg"
                    />
                    <Input
                        id="cpassword"
                        type="password" 
                        displayName="Confirm Password"
                        inputClass="rounded-lg"
                    />
                    
                    <Button 
                        type="submit"
                        title="Reset Password"
                        className="rounded-lg mt-4"
                    />
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default PasswordReset3;