import React, {useContext} from "react";

import Avatar from '@mui/material/Avatar';

import PageWrapper from "../../shared/components/PageWrapper";
import ButtonWithIcon from "../../shared/components/ButtonWithIcon";
import { AuthContext } from "../../shared/context/auth-context";

import DefaultProfileImg from "../../shared/images/default-avatar.jpg";

const PersionalInfo = (props) => {

    const auth = useContext(AuthContext);

    return (
        <PageWrapper
            wrapperClasses="flex flex-col pt-8"
            selected="p"
        >   
            <div className="w-full flex flex-col items-center mb-3">
                <Avatar 
                    alt={auth.loginDetails.name} 
                    src={props.profileUrl || DefaultProfileImg} 
                    sx={{ width: 100, height: 100 }}
                />
            </div>
            <div className="flex flex-col items-start pl-5 gap-y-2">
                <div className="font-main font-semibold">Name: {auth.loginDetails.name}</div>
                <div className="font-main text-dove-gray">ID: {auth.loginDetails.id}</div>
                <div className="font-main text-dove-gray">Email: {auth.loginDetails.email}</div>
                <div className="font-main text-dove-gray">Phone No: {auth.loginDetails.phoneNo}</div>
                <ButtonWithIcon
                    to="/pwdReset1"
                    size="w-fit"
                    className="px-4 py-2 mt-4 flex flex-row rounded-lg font-main"
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                >
                    Password Reset
                </ButtonWithIcon>
            </div>
        </PageWrapper>
    );
};

export default PersionalInfo;