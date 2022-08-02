import React from "react";

const ContentRapper = (props) => {
    return (
        <div className={`text-center relative w-full h-full-nav shadow-wrapper overflow-y-scroll rounded-2xl mx-3 ${props.wrapperClasses}`}>
            {props.children}
        </div>
    );
}

export default ContentRapper;