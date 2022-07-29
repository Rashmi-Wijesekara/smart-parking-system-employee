import React from "react";

import NavContainer from "../navbar/components/NavContainer";
import ContentRapper from "./ContentRapper";

const PageWrapper = () => {
    return (
        <div className="w-full h-full relative flex justify-center">
            <ContentRapper>

            </ContentRapper>
            <NavContainer />
        </div>
    );
};

export default PageWrapper;