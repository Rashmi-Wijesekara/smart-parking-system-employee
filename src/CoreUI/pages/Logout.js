import React, { useContext } from "react";
import FormCard from "../../shared/components/FormCard";

import ImageArea from "../../shared/components/ImageArea";
import PageWrapper from "../../shared/components/PageWrapper";
import Button from "../../shared/Form/Components/Button";
import { AuthContext } from "../../shared/context/auth-context";

import LogoutImg from "../../shared/images/logout.svg";

const Logout = () => {

    const auth = useContext(AuthContext);

    return (
        <PageWrapper
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <ImageArea src={LogoutImg} alt="background-image" className="mx-auto w-full-img " />
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6">Are you sure you want to log out ?</div>
                <form>
                <div className="flex flex-row gap-2">
                    <Button 
                        to="/profile"
                        title="Cancel"
                        className="font-second rounded-lg"
                    />
                    <Button 
                        title="Log Out"
                        color="bg-apricot"
                        className="font-second rounded-lg"
                        onClick={auth.logout()}
                    />
                </div>
                </form>
            </FormCard>
        </PageWrapper>
    )
};

export default Logout;