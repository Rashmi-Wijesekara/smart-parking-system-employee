/* 
    This return app logo with given class properties as (props.className)
*/

import React from "react";

import logo from "../images/megaMediaLogo.svg";

const AppLogo = props => {
    return (
        <div className={`${props.className} z-10`}>
            <img src={logo} alt="mega media logo" className={props.imgClass || "h-7"}/>
        </div>
    );
};

export default AppLogo;