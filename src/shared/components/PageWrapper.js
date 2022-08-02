// this is the page wrapper that contain the content of the interface
// props = selected, children
// to select feature activate set props.selected to ? (h=home, d=dashboard, p=my profile)

import React from "react";

import NavContainer from "../navbar/components/NavContainer";
import AppLogo from "./AppLogo";
import ContentRapper from "./ContentRapper";

const PageWrapper = (props) => {
    return (
        <div className="w-full h-full relative flex justify-center">
            <ContentRapper wrapperClasses={props.wrapperClasses}>
                {props.children}
                <AppLogo className={`${props.isFloat ? "float-right" : "absolute"} bottom-2 right-1`} height="h-6" />
            </ContentRapper>
            <NavContainer selected={props.selected} />
        </div>
    );
};

export default PageWrapper;