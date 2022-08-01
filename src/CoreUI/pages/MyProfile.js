import React, {useContext} from "react";

import Avatar from '@mui/material/Avatar';

import PageWrapper from "../../shared/components/PageWrapper";
import IconBtn from "../../shared/components/IconBtn";
import { AuthContext } from "../../shared/context/auth-context";

import DefaultProfileImg from "../../shared/images/default-avatar.jpg";

const MyProfile = (props) => {

    const auth = useContext(AuthContext);

    return (
        <PageWrapper 
            selected="p"
            wrapperClasses="flex flex-col pt-8 pl-8"
        >
            <div className="flex mb-8">
                <Avatar 
                    alt={auth.loginDetails.id} 
                    src={props.profileUrl || DefaultProfileImg} 
                    sx={{ width: 70, height: 70 }}
                />
                <div className="text-left ml-3 flex flex-col justify-center">
                    <div className="font-bold font-main">{auth.loginDetails.name}</div>
                    <div className="font-main">{auth.loginDetails.email}</div>
                </div>
            </div>
            <div>
                <IconBtn 
                    to="/profileInfo"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
                    label="Profile Info"
                />
                <IconBtn 
                    to="/addVehicle"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                    label="Add Vehicle"
                />
                <IconBtn 
                    to="/removeVehicle"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    label="Remove Vehicle"
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