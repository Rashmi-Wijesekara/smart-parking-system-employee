import React from "react";

import Avatar from '@mui/material/Avatar';

import PageWrapper from "../../shared/components/PageWrapper";
import IconBtn from "../../shared/components/IconBtn";

import DefaultProfileImg from "../../shared/images/default-avatar.jpg";

const MyProfile = (props) => {

    const name = "kdjf kdjfddd";
    const email = "djfdiddiif@gmail.com"

    return (
        <PageWrapper 
            selected="p"
            wrapperClasses="flex flex-col pt-8 pl-8"
        >
            <div className="flex mb-8">
                <Avatar 
                    alt={props.personName} 
                    src={props.profileUrl || DefaultProfileImg} 
                    sx={{ width: 70, height: 70 }}
                />
                <div className="text-left ml-3 flex flex-col justify-center">
                    <div className="font-bold font-main">{name}</div>
                    <div className="font-main">{email}</div>
                </div>
            </div>
            <div>
                <IconBtn 
                    to="/profileInfo"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
                    label="Profile Info"
                />
                <IconBtn 
                    to="/logout"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                    label="Log Out"
                />
            </div>
        </PageWrapper>
    )
};

export default MyProfile;