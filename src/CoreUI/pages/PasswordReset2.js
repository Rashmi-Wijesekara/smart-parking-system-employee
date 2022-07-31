import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageArea from "../../shared/components/ImageArea";
import FormCard from "../../shared/components/FormCard";
import Button from "../../shared/Form/Components/Button";

import PwdImg from "../../shared/images/mail-img.svg";

const PasswordReset2 = () => {
    return (
        <PageWrapper
        selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={PwdImg} alt="background-image" className="mx-auto h-32 " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Please check yor inbox and enter the given verification code</div>
                <form>
                    <div className={`text-left mb-2`}>
                        <div className="mb-4">
                            <label 
                                className={`w-full text-dove-gray rounded-lg h-7 px-2 py-3 font-second text-ssx`}
                            >
                                Verfication Code
                            </label>
                        </div>
                        <div className="flex flex-row gap-2 justify-between px-2">
                            <input type="number" className="bg-alto rounded-lg" min="0" max="9" />
                            <input type="number" className="bg-alto rounded-lg" min="0" max="9" />
                            <input type="number" className="bg-alto rounded-lg" min="0" max="9" />
                            <input type="number" className="bg-alto rounded-lg" min="0" max="9" />
                        </div>
                        <Button 
                            type="submit"
                            title="Verify"
                            className="mt-6 rounded-lg mx-2"
                        />
                    </div>
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default PasswordReset2;